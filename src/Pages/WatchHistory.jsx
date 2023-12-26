import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getHistoryAPI, removeHistoryAPI } from '../services/allAPI'
Button



function WatchHistory() {

  const [history, setHistory] = useState([])
  useEffect(() => {
    getHistory()
  }, [])
  const getHistory = async () => {
    const result = await getHistoryAPI()
    if (result.status === 200) {
      setHistory(result.data)
    } else {
      console.log("API Failed!!!");
      console.log(result.message);
    }
  }
  const removeHistoryItem = async (id) => {
    await removeHistoryAPI(id)
    getHistory()
  }
  return (
    <>
      <div div className='container mt-5 d-flex justify-content-between'>
        <h3>Watch History</h3>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <h5><i class="fa-solid fa-arrow-left fa-beat me-2"></i>Back to Home</h5>

        </Link>      </div>
      <div className='container mt-5'>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>TimeStamp</th>
              <th><i class="fa-solid fa-ellipsis"></i></th>

            </tr>
          </thead>
          <tbody>
            {history?.length > 0 ? history?.map((video, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{video?.caption}</td>
                <td><a href={video?.link} target='_blank'>{video?.link}</a></td>
                <td>{video?.timeStamp}</td>
                <td><button onClick={() => removeHistoryItem(video?.id)} className='btn'><i className="fa-solid fa-trash text-danger "></i></button></td>

              </tr>
            )) :
              <p className='fw-bolder text-dangert fs-4'>Your Watch History is Empty!!!</p>
            }


          </tbody>
        </Table>
      </div>


    </>
  )
}

export default WatchHistory