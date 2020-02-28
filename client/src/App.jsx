import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import Product from './components/Product'
import Pagination from './components/Paginate'

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {

  const [date, setDate] = useState(new Date())
  const [products, setProducts] = useState([])

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)

  useEffect(() => {
    let newdate = date.toLocaleDateString().split('/').join('-')
    async function getData() {
      let data = await fetch('/api/posts/' + newdate)
        .then(response => response.json())
      setProducts(data.posts)
      console.log(data.posts)
    }
    getData();
  }, [date]);

  const handleChangeDate = date => {
    setDate(date)
  }

  const styles = {
    backgroundColor: "Red",
    marginTop : '20px'
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={4} className="text-center">
            <DatePicker
              selected={date}
              onChange={handleChangeDate}
            />
          </Col>
          <Col sm={8} >
            <Row className="justify-content-around" style={styles}>
              {currentPosts.map((product, index) => (
                <Product
                  key={index}
                  name={product.name}
                  tagline={product.tagline}
                  redirectUrl={product.redirect_url}
                  username={product.user.name}
                  imgUrl={product.thumbnail.image_url} />
              ))}
            </Row>
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={products.length}
                paginate={paginate}
              />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
