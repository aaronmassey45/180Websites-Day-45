import React from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap'

const Gif = (props) => {
  let stuff = props.data.data.map(data => {
    return (
      <Col key={data.id} sm={4}>
        <a href={data.bitly_url} target='_blank'>
          <Image src={data.images.downsized.url} alt={data.slug} responsive/>
        </a>
      </Col>
    );
  })
  return (
    <div className='Gif'>
      <Grid>
        <Row>
          {stuff}
        </Row>
      </Grid>
    </div>
  );
}

export default Gif;
