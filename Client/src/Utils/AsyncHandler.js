export const AsyncHandler = async (asyncFn) => {
  try {
    const data = await asyncFn();
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
