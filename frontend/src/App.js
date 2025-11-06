import React, { useState, useEffect } from "react";
import styled from '@emotion/styled'
import { Global, keyframes } from "@emotion/react";
import { FaLink, FaSpinner, FaCheckCircle, FaExclamationCircle, FaCopy, FaHistory } from 'react-icons/fa'

const API_URL = process.env.REACT_APP_BACKEND

function App() {
  return (
    <AppLayOut>
      <AppHeader>
        <MainContent>
          
        </MainContent>
      </AppHeader>
    </AppLayOut>
  )
}

export default App;
