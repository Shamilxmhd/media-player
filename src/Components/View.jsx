import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard';
import { getAllCategoryAPI, getAllVideoAPI, updateCategoryAPI } from '../services/allAPI'



function View({uploadVideoResponse,setDropResponse}) {
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false)
  const [allVideos, setAllVideos] = useState([])
  useEffect(() => {
    
    getAllUploadedVideos()
    setDeleteVideoResponse(false)
  }, [uploadVideoResponse, deleteVideoResponse])

  const getAllUploadedVideos = async () => {
    const result = await getAllVideoAPI()
    if (result.status === 200) {
      console.log(result);
      setAllVideos(result.data)
    } else {
      console.log("API failed");
      setAllVideos([])
    }
  }
  const dragOver = (e) => {
    e.preventDefault()
  }
  const videoDropped = async (e) => {
    const { videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"))
    console.log();
    const { data } = await getAllCategoryAPI()
    const selectedCategory = data.find(item => item.id == categoryId)
    let result = selectedCategory.allVideos.filter(video => video.id != videoId)
    let { id, CategoryName } = selectedCategory
    let newCategory = { id, CategoryName, allVideos: result }
    console.log(newCategory);

    const res = await updateCategoryAPI(categoryId,newCategory)
    setDropResponse(res)
  }
  return (
    <>
      <Row droppable="true" onDragOver={e => dragOver(e)} onDrop={(e) => videoDropped(e)}>
        {
          allVideos?.length > 0 ? allVideos.map(video => (
            <Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
              <VideoCard setDeleteVideoResponse={setDeleteVideoResponse} video={video} />
            </Col>
          )) : <p className='fs-3 text-warning fw-bolder'>No Videos are uploaded yet!!!</p>

        }
      </Row>
    </>
  )
}

export default View