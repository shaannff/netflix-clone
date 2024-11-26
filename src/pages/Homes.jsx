import React, { useState } from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import Requests from '../request'


const Homes = () => {
    console.log('consoleing the ome')
  return (
    <div>
    <Main/>
    <Row title='UpComing' fetchURL={Requests.requestUpcoming}/>
    <Row title='Popular' fetchURL={Requests.requestPopular}/>
    <Row title='Trending' fetchURL={Requests.requestTrending}/>
    <Row title='TopRated' fetchURL={Requests.requestTopRated}/>
    <Row title='Horror' fetchURL={Requests.requestHorror}/>
</div>
  )
}

export default Homes