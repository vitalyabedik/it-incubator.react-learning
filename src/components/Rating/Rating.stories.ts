import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';

import {Rating} from './Rating';




// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Rating',
    component: Rating,
    tags: ['autodocs'],
    // argTypes: {
    //     value: RatingValueType,
    //     onClick: (value: RatingValueType) => void
    // },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Star_1: Story = {
    args: {
        value: 1,
    },
};

export const Star_2: Story = {
    args: {
        value: 2,
    },
};

export const Star_3: Story = {
    args: {
        value: 3,
    },
};

export const Star_4: Story = {
    args: {
        value: 4,
    },
};

export const Star_5: Story = {
    args: {
        value: 5,
    },
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const ChangeStar: Story = {
    args: {
        value: 2,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const clickStar = await canvas.getByRole('button', {
            name: '2',
        });
        await userEvent.click(clickStar);
    },
};

