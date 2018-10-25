import { 
    SET_NEWSLETTERS
} from '../actions/types';

export function fetchNewsletters() {
    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holidays',
                body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum cupiditate, aperiam iure molestias exercitationem accusantium cumque sunt expedita quibusdam totam. Enim doloremque pariatur vero dignissimos, repellat cum atque eos!`,
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsum cupiditate, aperiam iure molestias exercitationem accusantium cumque sunt expedita quibusdam totam. Enim doloremque pariatur vero dignissimos, repellat cum atque eos!`,
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }
    return {
        type: SET_NEWSLETTERS,
        payload: Response.data
    }
}