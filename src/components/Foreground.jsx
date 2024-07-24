import React, { useRef } from "react";

import Card from "./Card";
import { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
function Foreground({ theme, changeTheme, themes }) {
  const [notes, setNotes] = useState([
    { id: 1, content: "First Note" },
    { id: 2, content: "Second Note" },
    { id: 3, content: "Third Note" },
  ]);
  const [settings, setSettings] = useState(false);
  console.log(theme.color);
  const ref = useRef(null);

  function onAdd() {
    setNotes((prev) => {
      return [...prev, { id: new Date(), content: "" }];
    });
  }
  function deleteNote(id) {
    console.log("delete id", id);
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }
  function inputChange(value, id) {
    notes.map((item) => {
      if (item.id == id) {
        return (item.content = value);
      }
    });
  }
  function handleSettings() {
    setSettings(!settings);
  }

  console.log("Current notes: ", notes);
  return (
    <div
      ref={ref}
      className="fixed z-[3] w-full h-full p-5 flex gap-5 flex-wrap"
    >
      <div className="text-5xl h-[10%] w-full ">
        <div className="absolute right-5 cursor-pointer">
          <div onClick={onAdd}>
            <IoMdAddCircle />
          </div>
        </div>
      </div>

      {notes.map((item, index) => {
        console.log(index);
        if (item != null || item != undefined) {
          return (
            <Card
              key={item.id}
              id={item.id}
              content={item.content}
              onChange={inputChange}
              onDelete={deleteNote}
              theme={theme}
              refer={ref}
            />
          );
        }
      })}
      <div className="h-max absolute right-2 bottom-2 flex z-30">
        <div
          className={
            settings == false
              ? "hidden"
              : ` ${theme.bgColor} h-max w-max p-5 absolute right-5 bottom-14 text-xl rounded-md`
          }
        >
          <label className={"font-bold " + theme.labelColor}>Theme</label>
          <select
            onChange={changeTheme}
            id="theme"
            name="theme"
            className={theme.textColor + " " + theme.bgColor + " pl-2"}
          >
            <option defaultValue={theme.color}>{theme.color}</option>
            <option value="grey">Grey(Default)</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        <div
          onClick={handleSettings}
          className={
            settings
              ? "absolute right-5 bottom-5 text-4xl rotate-90 cursor-pointer"
              : "absolute right-5 bottom-5 text-4xl cursor-pointer"
          }
        >
          <IoSettingsSharp />
        </div>
      </div>
    </div>
  );
}

export default Foreground;
