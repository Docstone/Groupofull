import axios from 'axios';
import React from 'react';
import { confirm } from "react-confirm-box";
import { useNavigate } from 'react-router-dom';





const DeleteAccount = () => {
  const navigate = useNavigate()
  const uuid = localStorage.getItem('userId')
  const auth = localStorage.getItem('token')

  const onClick = async () => {
        const result = await confirm("Êtes vous sur(e) de vouloir supprimer cet utilisateur?");
        if (result) {
          axios.delete(`http://localhost:3300/auth/deleteUser/${uuid}`, {
                headers: {
                    Authorization: `Bearer ${auth}`,
                    auth: uuid
                }}).then(() => {
                    localStorage.clear()
                    navigate("/")
                  })
                return;
        }
      };


    return (
        <div>
            <button onClick={onClick} >Supprimer Profil</button>
        </div>
    );
}

export default DeleteAccount;
