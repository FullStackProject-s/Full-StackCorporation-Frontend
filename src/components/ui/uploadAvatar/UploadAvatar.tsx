import React from 'react'

import { uploadAvatar } from 'redux/profile/asyncActions'

import { useAppDispatch, useAppSelector } from 'redux/store'

import style from './uploadAvatar.module.scss'

export const UploadAvatar: React.FC = () => {

    const dispatch = useAppDispatch()

    const { pk } = useAppSelector(state => state.profile)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files?.length) dispatch(uploadAvatar({profile_avatar: event.target.files[0], pk}))
    }

    return (
        <div className = {style.uploadAvatar}>
            <label className = {style.uploadAvatar__label} htmlFor="uploadAvatar">+</label>
            <input 
                className = {style.uploadAvatar__input} 
                type="file" 
                name = "uploadAvatar"
                accept = 'image/*,.png,.jpg,.web'
                onChange={handleChange}
            />
        </div>
    )
}