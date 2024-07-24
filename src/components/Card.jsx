import React from "react";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineDone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";

function Card({ id, content, onChange, onDelete, refer, theme }) {
  const [editNote, setEditNote] = useState(true);
  function handleDeleteClick() {
    onDelete(id);
  }
  function onChangeHandler(event) {
    onChange(event.target.value, id);
  }
  function edit() {
    setEditNote(!editNote);
  }
  return (
    <motion.div
      drag
      dragConstraints={refer}
      whileDrag={{ scale: 1.2 }}
      dragTransition={{ bounceDamping: 50 }}
      className={
        "relative flex-shrink-0 w-60 h-80 rounded-[50px] p-5 " +
        theme.textColor +
        " " +
        theme.bgColor
      }
    >
      <header
        onClick={edit}
        className="absolute top-5 right-5 text-[20px] cursor-pointer"
      >
        {editNote === true ? <MdModeEdit /> : <MdOutlineDone />}
      </header>
      {editNote === true ? (
        <textarea
          maxLength={200}
          onChange={onChangeHandler}
          className="w-[100%] h-[80%] mt-[20%] bg-transparent"
          placeholder={content}
          spellCheck="false"
          readOnly
        />
      ) : (
        <textarea
          maxLength={200}
          onChange={onChangeHandler}
          className="w-[100%] h-[80%] mt-[20%] bg-transparent"
          placeholder={content}
          spellCheck="false"
        />
      )}

      <div
        onClick={handleDeleteClick}
        className="absolute right-5 text-[20px] bottom-3 cursor-pointer"
      >
        <MdDelete />
      </div>
    </motion.div>
  );
}

export default Card;
