import React from 'react'

type PropsType = any

interface IProps extends PropsType {
    bg?: string,
    color?: string,
    w?: number,
    h?: number,
    m?: string | number,
    as?: keyof JSX.IntrinsicElements,
    p?: number,
    className?: string,
    border?: string
}

const Box: React.FC<IProps> = ({
    children,
    bg,
    color,
    h,
    m,
    p,
    w,
    as: Tag = 'div',
    border,
    className,
    ...props }) => {
    return (
        <Tag {...props} className={className} style={{
            ...props,
            background: bg,
            color,
            height: h,
            border,
            width: w,
            margin: m,
            padding: p,
        }}>
            {children}
        </Tag>
    )
}

export default Box
