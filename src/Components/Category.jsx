import React, { useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Modal, Row, Col, Collapse } from 'react-bootstrap';
import { addCategoryAPI, getAVideoAPI, getAllCategoryAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';


function Category(dropResponse) {
  const [allCategories, setAllCategories] = useState([])
  const [CategoryName, setCategoryName] = useState("")
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getAllCategories()
  }, [dropResponse])

  const getAllCategories = async () => {
    const { data } = await getAllCategoryAPI()
    setAllCategories(data)
  }


  const handleAdd = async () => {
    if (CategoryName) {
      const result = await addCategoryAPI({ CategoryName, allVideos: [] })
      if (result.status >= 200 && result.status < 300) {
        handleClose()
        setCategoryName("")
        getAllCategories()
      } else {
        alert("result.message")
      }
    } else {
      alert("Please fil the form completely!!!")
    }
  }
  const removeCategory = async (id) => {
    await removeCategoryAPI(id)
    getAllCategories()
  }
  const dragOver = (e) => {
    console.log("VideoCard draging over the category");
    e.preventDefault()
  }
  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("videoId")
    console.log("Video id :" + videoId + "dropped!!! Inside the category:" + categoryId);
    const { data } = await getAVideoAPI(videoId)
    console.log(data);
    const selectedCategory = allCategories.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId, selectedCategory)
    getAllCategories()
  }
  const videoDragStarted = (e, videoId, categoryId) => {
    let dataShare = { videoId, categoryId }
    e.dataTransfer.setData("data", JSON.stringify(dataShare))
  }
  return (
    <>
      <div className='d-grid'>
        <Button className='btn btn-info' onClick={handleShow}>
          Add New Category
        </Button>
      </div>
      {
        allCategories?.length > 0 ? allCategories.map(Category => (
          <div className='border rounded p-3 mt-2' droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, Category?.id)}>
            <div onClick={() => setOpen(!open)} className='d-flex justify-content-between align-items-center'>
              <h6>{Category?.CategoryName}</h6>
              <button onClick={() => removeCategory(Category?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
            </div>
            <Collapse in={open}>
              <Row>
                {
                  Category?.allVideos?.length > 0 ? Category?.allVideos.map(card => (
                    <Col draggable onDragStart={e => videoDragStarted(e, card.id, Category.id)} sm={12} className='mb-2'>
                      <VideoCard video={card} insideCategory={true} />
                    </Col>
                  )) : null
                }
              </Row>
            </Collapse>
          </div>

        )) : <p className='fw-bolder fs-5 text-warning mt-2'>No Categories are added yet!!!</p>

      }



      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Category Name"
            className="mb-3">
            <Form.Control type="text" placeholder="Category Name" onChange={e => setCategoryName(e.target.value)} />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} className='btn btn-info'>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}
export default Category