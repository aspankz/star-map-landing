import React from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
  color?: string
}

export const TelegramIcon = ({
  color = 'white',
  width = 24,
  height = 24,
  ...props
}: Props) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21.0196 4.34655L2.68032 11.3006C1.94232 11.6244 1.69271 12.273 2.50195 12.6249L7.20675 14.0951L18.5824 7.18207C19.2035 6.74807 19.8394 6.8638 19.2922 7.34122L9.52208 16.0398L9.21517 19.721C9.49944 20.2894 10.0199 20.2921 10.3519 20.0096L13.055 17.4946L17.6844 20.9033C18.7596 21.5293 19.3447 21.1253 19.576 19.9781L22.6125 5.83987C22.9278 4.42771 22.3901 3.8055 21.0196 4.34655Z"
        fill={color || 'currentColor'}
      />
    </svg>
  )
}
