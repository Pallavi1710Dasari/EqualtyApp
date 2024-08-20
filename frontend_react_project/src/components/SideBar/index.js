import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegFilePdf } from "react-icons/fa6";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiChatHistoryLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { CiSquarePlus } from "react-icons/ci";
import { MdOutlineCoPresent, MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdHomeFilled } from "react-icons/md";
import { AiOutlineAppstore } from "react-icons/ai"; // Icon for modal trigger
import { useDispatch } from 'react-redux';
import techSharthiLogo from "../../public/techSharthiLogo.webp";
import { addNewChat } from "../../store";
import PreviousChats from "../PreviousChats";
import Modal from '../Modal';
import { FaUserCircle } from 'react-icons/fa';

import "./index.css";

const SideBar = ({ isExpanded, onChangesidebar, sideClassName, setPreviousChatOpen, previousChatOpen }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedTab, setTab] = useState("home");
  const [isModalOpen, setModalOpen] = useState(false);

  const sidebarToggle = () => onChangesidebar();
  const onIconClick = () => setModalOpen(true); 
  const closeModal = () => setModalOpen(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={`sidebar-container ${sideClassName}`}>
        <div className={`sidebar-background ${isExpanded ? "expanded" : ""}`}>
          <div className="profile-success-container">
            <img className="logo" src={techSharthiLogo} alt="logo" />
            {isExpanded && (
              <div className="logo-text">
                <h1 className="title gradient-title">Equati<span className="subtitle gradient-subtitle">AI</span></h1>
              </div>
            )}
          </div>
          <div className="icons">
            <div className={`sidebar-item ${selectedTab === "home" ? "blue-icon" : ""}`} onClick={() => setTab("home")}>
              <MdHomeFilled className="nav-item-mobile-link" />
              {isExpanded && <p className="sidebar-description">Home</p>}
            </div>
            <div className={`sidebar-item ${selectedTab === "chat" ? "blue-icon" : ""}`} onClick={() => { setTab("chat"); dispatch(addNewChat()); navigate('/chats'); }}>
              <CiSquarePlus className="nav-item-mobile-link" />
              {isExpanded && <p className="sidebar-description">Chat</p>}
            </div>
            <div className={`sidebar-item ${selectedTab === "history" ? "blue-icon" : ""}`} onClick={() => { setTab("history"); setPreviousChatOpen(!previousChatOpen); }}>
              <RiChatHistoryLine className="nav-item-mobile-link" />
              {isExpanded && <p className="sidebar-description">Chat History</p>}
            </div>
            <div className="sidebar-item" onClick={onIconClick}>
              <AiOutlineAppstore size={30} onClick={toggleModal} style={{ cursor: 'pointer' }} />
              {isExpanded && <p className="sidebar-description">Plans</p>}
              {isModalOpen && <Modal isOpen={isModalOpen} onClose={toggleModal} />}
              {/* {isModalOpen && <Modal closeModal={closeModal} />} */}
            </div>
            <div className="sidebar-item">
              <BsPersonWorkspace className="nav-item-mobile-link" />
              {isExpanded && <p className="sidebar-description">Workspace</p>}
            </div>
          </div>
          <div className="sidebar-footer">
            <div className="sidebar-item last-item" onClick={() => navigate("/login")}>
              {!isExpanded && <CgProfile className="nav-item-mobile-link" />}
            </div>
            {isExpanded && <button className="sidebar-button" onClick={() => navigate("/login")}>Sign up / Log in</button>}
          </div>
        </div>
        <button className="sidebar-toggle-button" onClick={sidebarToggle}>
          {isExpanded ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
        </button>
      </div>

      {isModalOpen && <Modal closeModal={closeModal} />} {/* Render modal if open */}

      <PreviousChats open={previousChatOpen} onClose={() => setPreviousChatOpen(!previousChatOpen)} />
    </>
  );
};

export default SideBar;
