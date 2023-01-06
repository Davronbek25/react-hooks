import React, { useEffect, useState } from 'react'

export const Printable = ({ calculateTable }) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    console.log("Print Table Runs!")
    setRows(calculateTable(3))
  }, [calculateTable])

  return rows.map((row, index) => {
    return <p key={index}>{row}</p>
  })
}
