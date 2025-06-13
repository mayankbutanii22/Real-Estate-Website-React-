export const subscribeNewsletter = (email) => {
  return {
    type: 'SUBSCRIBE_NEWSLETTER',
    payload: email,
  };
};
