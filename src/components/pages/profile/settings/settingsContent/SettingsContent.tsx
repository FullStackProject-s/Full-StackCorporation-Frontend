import React, { useEffect } from 'react'

import { useInputCheck } from 'hooks/formValidation/useInputCheck'

import { updateUser } from 'redux/user/asyncActions'
import { FormButton } from 'components/ui/formButton/FormButton'
import { useAppDispatch, useAppSelector } from 'redux/store'

import { Avatar } from 'components/common/avatar/Avatar'

import styles from './settingsContent.module.scss'
import { updateProfile } from 'redux/profile/asyncActions'
import { SettingsType } from 'types/pages/profile'
import { useNavigate } from 'react-router-dom'
import { paths } from 'routing/config'

export const SettingsContent: React.FC<SettingsType> = ({user, profile_avatar, about_user, pk}) => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error } = useAppSelector(state => state.user)

  const username = useInputCheck("", {isEmpty: true, minLength: 5, maxLength: 25})
  const email = useInputCheck("", {isEmpty: true, maxLength: 25, isEmail: true})
  const first_name = useInputCheck("", {isEmpty: true, maxLength: 25})
  const last_name = useInputCheck("", {isEmpty: true, maxLength: 25})
  const textarea = useInputCheck(``, {maxLength: 10000})

  useEffect(() => {
    if( user.username && user.email && user.first_name && user.last_name ) {
      username.setValue(user.username)
      email.setValue(user.email)
      first_name.setValue(user.first_name)
      last_name.setValue(user.last_name)
      textarea.setValue(about_user)
    }
  }, [user])

  const updateSettingsProfile = () => {

    dispatch(updateUser({
      username: username.value,
      email: email.value,
      first_name: first_name.value,
      last_name: last_name.value,
      pk: user.pk
    }))

    dispatch(updateProfile({
      pk: pk,
      user: user.pk,
      about_user: textarea.value
    }))

    if(!error) navigate(paths.profilePage)

  }

  return (
    <div className = {styles.settingsContent}>
      <div className = {styles.upSection}>
        <div className = {styles.avatarBlock}>
          <Avatar profile_avatar = {profile_avatar}/>
        </div>
        <div className = {styles.infoBlock}>
          <label className = {styles.label} htmlFor="">Username <span>{(username.isFocus && username.errorMessage) && username.errorMessage}</span></label>
          <input 
            type = "text"
            value = {username.value}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => username.onChange(e)}
            onBlur = {(e: React.FocusEvent<HTMLInputElement>) => username.onBlur(e)}
          />
          <label className = {styles.label} htmlFor="">First name <span>{(first_name.isFocus && first_name.errorMessage) && first_name.errorMessage}</span></label>
          <input 
            type = "text"
            value = {first_name.value}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => first_name.onChange(e)}
            onBlur = {(e: React.FocusEvent<HTMLInputElement>) => first_name.onBlur(e)}
          />
          <label className = {styles.label} htmlFor="">Second name <span>{(last_name.isFocus && last_name.errorMessage) && last_name.errorMessage}</span></label>
          <input 
            type = "text"
            value = {last_name.value}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => last_name.onChange(e)}
            onBlur = {(e: React.FocusEvent<HTMLInputElement>) => last_name.onBlur(e)}
          />
          <label className = {styles.label} htmlFor="">Email <span>{(email.isFocus && email.errorMessage) && email.errorMessage}</span></label>
          <input 
            type = "email"
            value = {email.value}
            onChange = {(e: React.ChangeEvent<HTMLInputElement>) => email.onChange(e)}
            onBlur = {(e: React.FocusEvent<HTMLInputElement>) => email.onBlur(e)}
          />
          {
            error && <p className = {styles.alertMessage}>{error}</p>
          }
        </div>
      </div>
      <div className = {styles.aboutBlock}>
        <label className = {styles.label} htmlFor="">About me</label>
        <textarea 
          cols={30} 
          rows={16}
          placeholder = "Tell us a little bit about yourself"
          value = {textarea.value}
          onChange = {(e: React.ChangeEvent<HTMLTextAreaElement>) => textarea.onChange(e)}
          onBlur = {(e: React.FocusEvent<HTMLTextAreaElement>) => textarea.onBlur(e)}>
        </textarea>
      </div>
      <div className = {styles.buttonBlock}>
        <FormButton 
          disabled = {!username.formValid || !email.formValid || !first_name.formValid || !last_name.formValid} 
          onClick = {() => updateSettingsProfile()}>
          Update Profile
        </FormButton>
      </div>
    </div>
  )
}
