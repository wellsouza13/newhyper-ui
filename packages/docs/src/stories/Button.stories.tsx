import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@newhyper-ui/react'

export default {
    title: 'Button',
    component: Button,

    args: {
        children: 'Enviar',
    },
} as Meta<ButtonProps>

export const Primary: StoryObj = {}

export const Big: StoryObj<ButtonProps> = {
    args: {
        size: 'small',
    },
}
