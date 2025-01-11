import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
  color?: string
}

export const QuestionOpenIcon = ({
  color = 'white',
  width = 32,
  height = 32,
  ...props
}: Props) => {
  return (
    <svg
      className={clsx('size-8', props.className || '')}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="16" fill="white" fillOpacity="0.1" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0351 21.3658C12.7227 21.0534 12.7227 20.5468 13.0351 20.2344L17.2694 16.0001L13.0351 11.7658C12.7227 11.4534 12.7227 10.9468 13.0351 10.6344C13.3475 10.322 13.854 10.322 14.1665 10.6344L18.9665 15.4344C19.2789 15.7468 19.2789 16.2534 18.9665 16.5658L14.1665 21.3658C13.854 21.6782 13.3475 21.6782 13.0351 21.3658Z"
        fill={color || 'currentColor'}
        fillOpacity="0.5"
      />
    </svg>
  )
}
