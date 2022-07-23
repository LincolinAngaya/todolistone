import React,{useState} from 'react'
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo() {

const[modalIsOPen, setModalIsOPen]=useState(false);

//delete to component
function deleteHandler(){
  setModalIsOPen(true);
}

//cancel modal component
function closeModalHandler(){
    setModalIsOPen(false)
}

  return (
    <div className='card'>
      <h2>Explore the full React course</h2>
      <div className='actions'>
        <button className='btn'onClick={deleteHandler}>Delete</button>
      </div>
     { modalIsOPen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
    {modalIsOPen ? <Backdrop onCancel={closeModalHandler} />: null} 
    </div>
  )
}

export default Todo
