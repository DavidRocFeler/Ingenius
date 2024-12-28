'use client'
import { BubbleProvider } from '@/context/BubbleContext';
import BubbleFive from '@/components/BubbleFive';
import BubbleFour from '@/components/BubbleFour';
import BubbleOne from '@/components/BubbleOne';
import BubbleSeven from '@/components/BubbleSeven';
import BubbleSix from '@/components/BubbleSix';
import BubbleThree from '@/components/BubbleThree';
import BubbleTwo from '@/components/BubbleTwo';
import Control from '@/components/Control';
import CustomCursor from '@/components/CustomCursor';
import ExpandingBubble from '@/components/ExpandingBubble';
import Header from '@/components/Header';
import IconHome from '@/components/IconHome';
import IconSlideBar from '@/components/IconSlideBar';
import Input from '@/components/Input';
import SlideBar from '@/components/SlideBar';
import SphericalWaveBigger from '@/components/SphericalWaveBigger';
import { useState } from 'react';
import React from 'react'
import { ingeniusQuestionsHelpers } from '@/helpers/ingeniusQuestions.helpers';
import IngeniusMessage from '@/components/IngeniusMessage';
import IngeniusParagraph from '@/components/IngeniusParagraph';
import { ingeniusAdviceHelpers } from '@/helpers/ingeniusAdvice.helpers';
import ContainerUserChat from '@/components/ContainerChat';
import { userChatHelpers } from '@/helpers/usersChat.helpers';
import ChooseLearners from '@/components/ChooseLearners';
import { selectLearnersHelpers } from '@/helpers/selectLearners.helpers';
import UploadDocuments from '@/components/UploadDocuments';
import CurseSize from '@/components/CurseSize';
import { courseSizeHelpers } from '@/helpers/courseZise.helpers';
import GenerateCourse from '@/components/GenerateCourse';
import { useEffect } from 'react';

const LandinPageView: React.FC = () => {
  const [isSlideBarOpen, setIsSlideBarOpen] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true)
  const [showStudioCourse, setShowStudioCourse] = useState(false)
  const [minimizedPositionClass, setMinimizedPositionClass] = useState('');

  // Toggles the visibility of the slide bar and updates its open state.
  const handleSlideBarToggle = (isOpen: boolean) => {
    setIsSlideBarOpen(isOpen);
  };

  // Handles the click event for Studio Course, hiding the landing page and showing the studio course section.
  const handleStudioCourseClick = () => {
    setShowLandingPage(false)
    setShowStudioCourse(true)
  }

  // Opens the slide bar by setting its state to true.
  const handleOpenSlideBar = () => { 
    setIsSlideBarOpen(true); 
  };

  // Calculates the minimized position class based on the viewport size and the current application state.
  const calculateMinimizedPositionClass = () => {
    if (typeof window === 'undefined') {

    return ''; 
    } 

    const viewport = window.innerWidth;

    if (isSlideBarOpen && showStudioCourse) {
      if (viewport <= 400) return 'translate-x-[153px] translate-y-[676px]';
      if (viewport <= 768) return 'translate-x-[153px] translate-y-[840px]';
      return 'translate-x-[153px] translate-y-[556px]';
    }

    if (!isSlideBarOpen && showLandingPage) {
      if (viewport <= 400) return 'translate-x-[335px] translate-y-[790px]';
      if (viewport <= 768) return 'translate-x-[680px] translate-y-[955px]';
      return 'translate-x-[1376px] translate-y-[671px]';
    }

    if (isSlideBarOpen && showLandingPage) {
      if (viewport <= 400) return 'translate-x-[300px] translate-y-[790px]';
      if (viewport <= 768) return 'translate-x-[600px] translate-y-[970px]';
      return 'translate-x-[1272px] translate-y-[672px]';
    }

    return ''; // Default case
  };

  // Updates the minimized position class whenever relevant states change (e.g., slide bar, studio course, landing page visibility).
  useEffect(() => {
    const updatePositionClass = () => {
      const newClass = calculateMinimizedPositionClass();
      setMinimizedPositionClass(newClass);
    };

    updatePositionClass(); 

    window.addEventListener('resize', updatePositionClass); 

    return () => {
      window.removeEventListener('resize', updatePositionClass); 
    };
  }, [isSlideBarOpen, showStudioCourse, showLandingPage, calculateMinimizedPositionClass]);
  

  const renderControl = (inSlideBar: boolean) => (
    <Control 
      handleOpenSlideBar={handleOpenSlideBar}
      onStudioCourseClick={handleStudioCourseClick}
      initialPosition={inSlideBar ? { x: 115, y: 105 } : { x: 870, y: 145 }}
      minimizedPositionClass={minimizedPositionClass}
      isSlideBarOpen={isSlideBarOpen}
    />
  );

  const messageQuestionOne = ingeniusQuestionsHelpers.find((item) => item.id === 1);
  const messageQuestionTwo = ingeniusQuestionsHelpers.find((item) => item.id === 2);
  const messageQuestionThree = ingeniusQuestionsHelpers.find((item) => item.id === 3);
  const messageQuestionFour = ingeniusQuestionsHelpers.find((item) => item.id === 4);
  const messageQuestionFive = ingeniusQuestionsHelpers.find((item) => item.id === 5);
  const messageQuestionSix = ingeniusQuestionsHelpers.find((item) => item.id === 6);
  const messageQuestionSeven = ingeniusQuestionsHelpers.find((item) => item.id === 7);
  const messageQuestionEight = ingeniusQuestionsHelpers.find((item) => item.id === 8);
  const messageQuestionNine = ingeniusQuestionsHelpers.find((item) => item.id === 9);

  const messageAdviceOne = ingeniusAdviceHelpers.find((item) => item.id === 1);
  const messageAdviceTwo = ingeniusAdviceHelpers.find((item) => item.id === 2);
  const messageAdviceThree = ingeniusAdviceHelpers.find((item) => item.id === 3);
  const messageAdviceFour = ingeniusAdviceHelpers.find((item) => item.id === 4);
  const messageAdviceFive = ingeniusAdviceHelpers.find((item) => item.id === 5);
  const messageAdviceSix = ingeniusAdviceHelpers.find((item) => item.id === 6);
  const messageAdviceSeven = ingeniusAdviceHelpers.find((item) => item.id === 7);
  const messageAdviceEight = ingeniusAdviceHelpers.find((item) => item.id === 8);

  const messageUserOne = userChatHelpers.find((item) => item.id === 1);
  const messageUserTwo = userChatHelpers.find((item) => item.id === 2);
  const messageUserThree = userChatHelpers.find((item) => item.id === 3);
  const messageUserFour = userChatHelpers.find((item) => item.id === 4);

  const selectLearnersOne = selectLearnersHelpers.find((item) => item.id === 1 );
  const selectLearnersTwo = selectLearnersHelpers.find((item) => item.id === 2 );
  const selectLearnersThree = selectLearnersHelpers.find((item) => item.id === 3 );
  const selectLearnersFour = selectLearnersHelpers.find((item) => item.id === 4 );
  const selectLearnersFive = selectLearnersHelpers.find((item) => item.id === 5 );
  const selectLearnersSix = selectLearnersHelpers.find((item) => item.id === 6 );

  const courseSizeOne = courseSizeHelpers.find((item) => item.id === 1)
  const courseSizeTwo = courseSizeHelpers.find((item) => item.id === 2)
  const courseSizeThree = courseSizeHelpers.find((item) => item.id === 2)

  return (
    <div className='w-full max-w-full overflow-x-hidden pt-[1.5rem] pb-[1rem] relative bg-gradient-to-b from-[#FAFAFA] to-[#F3F3F3]
    flex flex-col justify-center items-center
    '>
      <CustomCursor/>
      <div className='flex flex-row ml-auto'>
        <IconHome/>
        {!isSlideBarOpen && <IconSlideBar onSlideBarOpen={setIsSlideBarOpen}  onSlideBarToggle={handleSlideBarToggle}/>}
      </div>
      {showLandingPage  && (
      <div id='LandingPage' className='mb-[5.5rem] relative 
        sm:mb-[9.5rem] xl:mb-[2.5rem]
      '>
        <div className='w-fit m-auto mt-[2rem]
          xl:mt-2
        '>
          <Header/>
          <div className='flex flex-row mt-1'>
            {messageQuestionOne && <IngeniusMessage message={messageQuestionOne.message} />}
          </div>
        </div>
      
        <div className='pt-[3.5rem] mb-[0.8rem] m-auto w-[45rem] h-[33.5rem]
            mt-[4.2rem] sm:mt-[10rem] xl:mt-[0.8rem]'
        >
            <BubbleProvider>
              <BubbleOne/>
              <BubbleTwo/>
              <BubbleThree/>
              <BubbleFour/>
              <BubbleFive/>
              <BubbleSix/>
              <BubbleSeven/>
            </BubbleProvider>
        </div>
       
      </div>
      )}
      { showStudioCourse &&  (
      <div id='StudioCourse' className='relative'>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[4rem]'>
          {messageQuestionTwo && <IngeniusMessage message={messageQuestionTwo.message} />}
          { messageAdviceOne &&  <IngeniusParagraph message={messageAdviceOne.message} />}
          {messageUserOne && <ContainerUserChat message={messageUserOne.message} />}
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionThree && <IngeniusMessage message={messageQuestionThree.message} />}
          { messageAdviceTwo &&  <IngeniusParagraph message={messageAdviceTwo.message} />}
          {messageUserTwo && <ContainerUserChat message={messageUserTwo.message} />}
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionFour && <IngeniusMessage message={messageQuestionFour.message} />}
          { messageAdviceThree &&  <IngeniusParagraph message={messageAdviceThree.message} />}
          {messageUserThree && <ContainerUserChat message={messageUserThree.message} />}
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionFive && <IngeniusMessage message={messageQuestionFive.message} />}
          { messageAdviceFour &&  <IngeniusParagraph message={messageAdviceFour.message} />}
          {messageUserFour && <ContainerUserChat message={messageUserFour.message} />}
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionSix && <IngeniusMessage message={messageQuestionSix.message} />}
          { messageAdviceFive &&  <IngeniusParagraph message={messageAdviceFive.message} />}
        </div>
        <div className='grid sm:grid-cols-3 gap-4 m-auto w-[13rem] sm:w-[40rem] mt-[2rem] mb-[2rem]' >
          {selectLearnersOne && <ChooseLearners number={selectLearnersOne.number} title={selectLearnersOne.title} paragraph={selectLearnersOne.paragraph} />}
          {selectLearnersTwo && <ChooseLearners number={selectLearnersTwo.number} title={selectLearnersTwo.title} paragraph={selectLearnersTwo.paragraph} />}
          {selectLearnersThree && <ChooseLearners number={selectLearnersThree.number} title={selectLearnersThree.title} paragraph={selectLearnersThree.paragraph} />}
          {selectLearnersFour && <ChooseLearners number={selectLearnersFour.number} title={selectLearnersFour.title} paragraph={selectLearnersFour.paragraph} />}
          {selectLearnersFive && <ChooseLearners number={selectLearnersFive.number} title={selectLearnersFive.title} paragraph={selectLearnersFive.paragraph} />}
          {selectLearnersSix && <ChooseLearners number={selectLearnersSix.number} title={selectLearnersSix.title} paragraph={selectLearnersSix.paragraph} />}
        </div>
        <div className='w-[22rem] sm:w-[40rem] m-auto mb-[2rem] '>
          <div className='ml-auto w-[90%]'>
          <p className='font-roboto font-normal text-[0.8rem] text-black'> Add aditional context (optional) </p>
            <textarea 
              className='font-roboto font-normal text-[0.8rem] text-[#636363] ml-auto mt-[1rem] flex flex-col bg-gradient-to-b from-[#F0F0F0] to-[#DDDDDD] w-[100%] h-[5rem] pt-[0.8rem] pb-[0.8rem] pl-[0.8rem] pr-[0.8rem] rounded-[12px]'
              placeholder='Type message...'
            />
          </div>
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionSeven && <IngeniusMessage message={messageQuestionSeven.message} />}
          { messageAdviceSix &&  <IngeniusParagraph message={messageAdviceSix.message} />}
        </div>
        <div className="w-[22rem] sm:w-[40rem] m-auto mt-[2rem]">
          <UploadDocuments/>
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionEight && <IngeniusMessage message={messageQuestionEight.message} />}
          { messageAdviceSeven &&  <IngeniusParagraph message={messageAdviceSeven.message} />}
        </div>
        <div className='grid sm:grid-cols-3 gap-3 m-auto w-[13rem] sm:w-[40rem] mt-[2rem]'>
          {courseSizeOne && <CurseSize size={courseSizeOne.size} tokens={courseSizeOne.tokens} featureOne={courseSizeOne.featureOne} featureTwo={courseSizeOne.featureTwo} featureThree={courseSizeOne.featureThree} featureFour={courseSizeOne.featureFour} />}
          {courseSizeTwo && <CurseSize size={courseSizeTwo.size} tokens={courseSizeTwo.tokens} featureOne={courseSizeTwo.featureOne} featureTwo={courseSizeTwo.featureTwo} featureThree={courseSizeTwo.featureThree} featureFour={courseSizeTwo.featureFour} />}
          {courseSizeThree && <CurseSize size={courseSizeThree.size} tokens={courseSizeThree.tokens} featureOne={courseSizeThree.featureOne} featureTwo={courseSizeThree.featureTwo} featureThree={courseSizeThree.featureThree} featureFour={courseSizeThree.featureFour} />}
        </div>
        <div className='flex flex-col m-auto w-[22rem] sm:w-[40rem] mt-[3rem]'>
          {messageQuestionNine && <IngeniusMessage message={messageQuestionNine.message} />}
          { messageAdviceEight &&  <IngeniusParagraph message={messageAdviceEight.message} />}
        </div>
        <div className='m-auto w-[40rem]'>
          <GenerateCourse/>
        </div>
       
      </div>
      )}
      <Input/>
      <SlideBar 
        isVisible={isSlideBarOpen} 
        onVisibilityChange={setIsSlideBarOpen}
        showStudioCourse={showStudioCourse}
        showLandingPage={showLandingPage} 
        renderControl={() => renderControl(true)}
      >
        {isSlideBarOpen && <SphericalWaveBigger isSlideBarOpen />}
      </SlideBar>
      
      {!showStudioCourse && renderControl(false)}
      {!isSlideBarOpen && <SphericalWaveBigger isSlideBarOpen={false} />}
      <ExpandingBubble/>
    </div>
  )
}

export default LandinPageView;