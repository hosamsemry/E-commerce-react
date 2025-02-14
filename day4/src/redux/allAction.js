export default function increaseAction (payload) {
    return {
    type: 'INCREASE',
    payload
    };
}

export default function decreaseAction (payload) {
    return {
    type: 'DECREASE',
    payload
    };
} 