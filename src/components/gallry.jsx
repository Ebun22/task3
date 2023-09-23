{skeletonLoading
    ? Array.from({ length: 6 }).map((_, idx) => (
        <div className="flex skeleton" key={idx}>
          <Skeleton height={350} width={300} />
          <Skeleton height={10} width={200} />
        </div>
      ))
    : showSearchResults
    ? searchImage.map((index, idx) => (
        <Draggable
          draggableId={index.id}
          key={index.id}
          index={idx}
        >
          {(provided) => (
            <div
              className="flex"
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <div className="dragIcon">
                <BiGridVertical color="#fff" />
              </div>
              <img
                src={index.urls.regular}
                alt={index.alt_description}
              />
              <div className="alt_description">
                {index.alt_description}
              </div>
            </div>
          )}
        </Draggable>
      ))
    : searchImage.map((index, idx) => (
        <Draggable
          draggableId={index.id}
          key={index.id}
          index={idx}
        >
          {(provided) => (
            <div
              className="flex"
              {...provided.dragHandleProps}
              {...provided.draggableProps}
              ref={provided.innerRef}
            >
              <div className="dragIcon">
                <BiGridVertical color="#fff" />
              </div>
              <img
                src={index.urls.regular}
                alt={index.alt_description}
              />
              <div className="alt_description">
                {index.alt_description}
              </div>
            </div>
          )}
        </Draggable>
      ))}
  {provided.placeholder}
</div>


import { AiOutlineSearch } from 'react-icons/ai';
import React, { useState, useRef, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../App.css';
import ImageSkeleton from './ImageSkeleton';
import { UseAuthContext } from '../Context/AuthContext';
import UserAuth from './UserAuth';
import { useStateContext } from '../Context/context';
import Navbar from './Navbar';


//please, i had to be chasing my supervisoraround for 3 days. 
//This matters to me but i could only work on it today
//did this in 6 hrs, imagine what i coukd do with time. please have mercy
function Gallery() {
  const [search, setSearch] = useState('')
  const images = [
    {
      "id": 1,
      "name": "Image 1",
      "description": "Bulb",
      "path": "/collection/image1.jpg"
    },
    {
      "id": 2,
      "name": "Image 2",
      "description": "Trash meme",
      "path": "/collection/image2.jpg"
    },
    {
      "id": 3,
      "name": "Image 3",
      "description": "Trash",
      "path": "/collection/image3.jpg"
    },
    {
      "id": 4,
      "name": "Image 4",
      "description": "Girl in B/W",
      "path": "/collection/image4.jpg"
    },
    {
      "id": 5,
      "name": "Image 5",
      "description": "Girl",
      "path": "/collection/image5.jpg"
    },
    {
      "id": 6,
      "name": "Image 6",
      "description": "Statue",
      "path": "/collection/image6.jpg"
    },
    {
      "id": 7,
      "name": "Image 7",
      "description": "Sky",
      "path": "/collection/image7.jpg"
    },
    {
      "id": 8,
      "name": "Image 8",
      "description": "Neon Lights",
      "path": "/collection/image8.jpg"
    },
    {
      "id": 9,
      "name": "Image 9",
      "description": "Dark Sky",
      "path": "/collection/image9.jpg"
    }

  ]
  const [newImages, setNewImages] = useState(images);
  const { hasAccount, setHasAccount, showSignUp, setShowSignUp, showAuth, setShowAuth } = useStateContext()
  const { isLogin, setIsLogin } = UseAuthContext();
  const [skeleton, setSkeleton] = useState(false)

  //function to convert capitalize any word
  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  //handle rearrangment of images
  const handleSort = (result) => {
    // //create a duplicate list
    // const newImageArray = [...images]


    // //remove and save the dragged content
    // //i.e at position dragItem, remove 1 element which would be the dragged item
    // const draggedItem = newImageArray.splice(dragItem.current, 1)[0]

    // //modifies the duplicate list generated and adds dragged item to new position
    // newImageArray.splice(dragOverItem.current, 0, draggedItem);

    // // resets the refs
    // dragItem.current = null;
    // dragOverItem.current = null;

    // setNewImages(newImageArray)

    if (!result.destination) return;

    const items = [...newImages];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setNewImages(items);
  }

  const handleSearch = (e) => {
    const value = e.target.value;
    console.log(value)
    setSearch(value.trim())

    if (value === "") {
      setNewImages(images);
    } else {
      const searchedData = newImages.filter(item => (item.description.includes(capitalize(search) || search)))

      setNewImages(searchedData);
    }

    console.log(newImages)
  }

  return (
    <div className="main">
      <Navbar />
      <div className='subheader-cont'>
        
        <div>
          <h1 className="text-4xl font-bold">Photos</h1>
          <span className="text-sky-400">Recent</span>
        </div>

        <div className="search-cont">
          <input
            type='text'
            placeholder='Search'
            className='searchBox'
            onChange={(e) => handleSearch(e)}
          />
          <p className='search-icon-cont'>
            <AiOutlineSearch />
          </p>
        </div>
      </div>

      {isLogin ? (
        <DragDropContext onDragEnd={handleSort}>
          <Droppable droppableId='horizontal-images'
            type="images"
            // direction="horizontal"
            >
            {(provided, snapshot) => (
              <div className='image-grid' {...provided.droppableProps} ref={provided.innerRef} >
                {newImages ? (newImages.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.name} index={index}>
                    {(provided, snapshot) => (
                      <div className="cardcontent"  {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} >
                        <img
                          alt={item.name}
                          src={"." + item.path}
                          className='image'
                        />
                        <p className="absolute bottom-0 bg-black w-full p-1 text-white text-sm text-center">
                          {item.description}
                        </p>
                        {provided.placeholder}
                      </div>
                    )}
                  </Draggable>
                ))) : <ImageSkeleton cards={images.length} />}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )
        : (
          <div className='image-grid'>

            {newImages ? (newImages.map((item, index) => (
              <div className="cardcontent"  >
                <img
                  alt={item.name}
                  src={"." + item.path}
                  className='image'
                />
                <p className="absolute bottom-0 bg-black w-full p-1 text-white text-sm text-center">
                  {item.description}
                </p>

              </div>
            ))) : <ImageSkeleton cards={images.length} />}
          </div>


        )
      }

    </div>

  );
}

export default Gallery;




{/* {newImages ? (
                    newImages.map((item, index) => (
                        <div
                            key={index}
                            className='relative h-64 w-full group'
                            draggable
                            onDragStart={(e) => (dragItem.current = index)}
                            onDragEnter={(e) => (dragOverItem.current = index)}
                            onDragEnd={handleSort}
                            onDragOver={(e) => e.preventDefault()}
                        >
                            <Image
                                width={250}
                                height={250}
                                alt={item.name}
                                src={item.path}
                                className='w-full h-full'
                            />
                            <p className="absolute bottom-0 bg-black w-full p-1 text-white text-sm text-center">
                                {item.description}
                            </p>
                        </div>
                    ))
                ) :
                    <ImageSkeleton cards={images.length} />
                } */}
