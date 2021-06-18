import md5 from 'crypto-js/md5'

export default function makeAvatar(user) {
  return `https://www.gravatar.com/avatar/${md5((user.firstName + user.lastName).toLowerCase())}?s=64&d=identicon`
}
