import React, { useState }  from "react";
import s from "./TableForm.module.scss"


function TableForm({data,value,width,tableName,background = 'linear-gradient(75deg, rgba(6,11,45,1) 13%, rgba(50,58,129,1) 47%, rgba(31,35,85,1) 73%, rgba(20,22,60,1) 100%)',height}){
    const columns = data[0] && Object.keys(data[0])
        if(value === 'data'){
        data.map(e =>{
            if(e.STATUS === "Online"){
                e.STATUS = <div><button className={s.onBtn}>{e.STATUS}</button></div>
                
            }else{
                e.STATUS = <div><button className={s.offbtn}>{e.STATUS}</button></div>
    
            } 

        })
        data.map(e =>{
            if(e.AUTHOR[0]){
                e.AUTHOR = <div className={s.forText}><div><img src={e.AUTHOR[0]} className={s.image1}></img></div><div><p>{e.AUTHOR[1]}</p> <p className={s.position}>{e.AUTHOR[2]}</p></div></div>
            }})
        data.map(e =>{
            if(e.FUNCTION.length > 0){
               e.FUNCTION = <div><div>{e.FUNCTION[0]}</div><div className={s.position}>{e.FUNCTION[1]}</div></div>
            }
        })    
            }else if(value === 'data1'){
            data.map(e =>{
                if(e.COMPLETION === "100%"){
                   e.COMPLETION = <div className={s.completion}>{e.COMPLETION}{<div className={s.oneHundred}></div>}</div>
                }else if(e.COMPLETION === "60%"){
                   e.COMPLETION = <div className={s.completion}>{e.COMPLETION}{<div className={s.sixty}></div>}</div>
                
                }else if(e.COMPLETION === "30%"){
                   e.COMPLETION = <div className={s.completion}>{e.COMPLETION}{<div className={s.thirty}></div>}</div>
                
                }else if(e.COMPLETION === "0%"){
                   e.COMPLETION = <div className={s.completion}>{e.COMPLETION}{<div className={s.zero}></div>}</div>
                }
            })
            data.map(e =>{
                if(e.PROJECT[0]){
                    e.PROJECT= <div className={s.forText}><img src={e.PROJECT[0]} className ={s.image2}></img><p>{e.PROJECT[1]}</p></div>

                }
            })
            data.map(e =>{
               e.ACTION = <div className={s.menubtn}><div></div><div></div><div></div></div> 
            })
        }
        return (
            <table  style={{
                width : width,
                background:background,
                height : height,
                tableName : tableName,
                value : value
            }}>
                <thead>
                    <h3>{tableName}</h3>
                    <tr>
                        {data[0] && columns.map((heading)=>
                            <td className={s.topText}>{heading}</td>
                        )}
                    </tr>

                </thead>
                    <tbody>
                        {data.map(row=>
                        <tr >   
                            {
                            columns.map(column =>
                                <td >
                                    {row[column]}
                                    
                                </td>)
                            }
                        </tr>)
                        }

                    </tbody>
            </table>
        )
}
export  default TableForm;