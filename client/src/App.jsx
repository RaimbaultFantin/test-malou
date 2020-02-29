import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Product from './components/Product';
import Pagination from './components/Pagination';
import Chart from './components/Chart';
import { GridLoader } from "react-spinners";

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // DatePicker State
  const [date, setDate] = useState(new Date())
  // Products State
  const [products, setProducts] = useState([])
  // Topics State
  const [topics, setTopics] = useState([])
  // Loading State
  const [loading, setLoading] = useState(false)
  // Paginations states
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  useEffect(() => {
    let newdate = date.toLocaleDateString().split('/').join('-')
    async function getData() {
      setLoading(true)
      let data = await fetch('/api/posts/' + newdate)
        .then(response => response.json())
        .catch(err => console.log(err))
      setProducts(data.posts)
      let currentTopics = []
      data.posts.forEach(elem => {
        elem.topics.forEach(topic => currentTopics.push(topic.name))
      })
      setTopics(currentTopics)
      setLoading(false)
    }
    getData();
  }, [date]);

  const handleChangeDate = date => {
    setDate(date)
  }

  const styles = {
    paddingTop: '20px',
    paddingBottom: '20px',
    height: '590px'
  }

  const half = {
    height: "50%"
  }
  // pagination variable properties
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container >
      <h1 style={{ color: "#ffffff" }} className="text-center">Test Malou by Raimbault Fantin<span role="img" aria-label="sheep">🌮😋</span></h1>
      <Row style={{ height: '750px' }}>
        <Col sm={4}>
          <Row style={half} className="justify-content-center d-flex align-items-center">
            <DatePicker
              selected={date}
              onChange={handleChangeDate}
            />
          </Row>
          <Chart topics={topics} />
        </Col>
        <Col sm={8} >
          <Row className="justify-content-around align-items-center" style={styles}>
            {loading ?
              <GridLoader
                color={"#ffffff"}
                loading={loading}
              /> : ((currentPosts.length > 0) ?
                currentPosts.map((product, index) => (
                  <Product
                    key={index}
                    name={product.name}
                    tagline={product.tagline}
                    redirectUrl={product.redirect_url}
                    username={product.user.name}
                    imgUrl={product.thumbnail.image_url}
                  />
                )) : <h2>no products found :/</h2>
              )
            }
          </Row>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={products.length}
            paginate={paginate}
          />
        </Col>
      </Row>
    </Container>
  );
}
