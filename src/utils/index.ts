const capitalize = (str: string) => str[0].toUpperCase() + str.slice(1).toLowerCase();

const onError = () => alert('Something went wrong, please try again.');

export {
  capitalize,
  onError,
}