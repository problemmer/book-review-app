import React from 'react'
import Card from '../card'
import './styles.css'
import { FaPlusCircle } from 'react-icons/fa';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import Modal from 'react-modal';


const customStyles = {
  content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: '#E8E9F8',
      width: '600px',
      borderRadius: '10px',
    },
  };

Modal.setAppElement('#root');

function BookList() {

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeButton() {
    setIsOpen(false);
  }

  return (
    <div className='booklist-container'>
        
        Best books to read
        <div className="add-book">
          <div  onClick={openModal}>
            Add Book
            <FaPlusCircle className='icon-plus'/>
          </div>
          
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeButton}
              style={customStyles}
              contentLabel="add modal"
            >
              <h2 className='modal-title'>Add Book</h2>
              <form className='input-add-book'>
                <input className='input' placeholder="Book name/title"/>
                <input className='input' placeholder="Author name"/>
                <input className='input' placeholder="Price"/>
                <input className='input' placeholder="Link book cover"/>
                <input className='input' placeholder="About author"/>
                <input className='input' placeholder="Review"/>

              </form>
              <div className='button-sc'>
                <button onClick={closeButton} className="button-save">Save</button>
                <button onClick={closeButton} className="button-close">Close</button>
              </div>
              
            </Modal>
        </div>
        <div className='card-list'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className="pagination_rounded">
          <ul>
              <li>
                  <a href="#" className="prev">
                    <BsArrowLeft/>
                  </a>
              </li>
              <li><a href="#">1</a></li>
              <li className="hidden-xs"><a href="#">2</a></li>
              <li className="hidden-xs"><a href="#">3</a></li>
              <li className="hidden-xs"><a href="#">4</a></li>
              <li className="hidden-xs"><a href="#">5</a></li>
              <li className="visible-xs"><a href="#">...</a></li>
              <li><a href="#">6</a></li>
              <li>
                <a href="#" className="next"> 
                <BsArrowRight/>
                {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
                </a>
              </li>
          </ul>
        </div>

    </div>
  )
}

export default BookList