import React from 'react'

import { UploadAvatar } from 'components/ui/uploadAvatar/UploadAvatar';

import styles from './avatar.module.scss'

interface AvatarType {
    profile_avatar: string
}

export const Avatar: React.FC<AvatarType> = ({profile_avatar}) => {
  return (
    <div className = {styles.avatar}>
        <img src = {profile_avatar} alt="avatar" />
        <UploadAvatar />
    </div>
  )
}
