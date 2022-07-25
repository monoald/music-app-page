const nextElement = (songs) => {
  let current;
  let next;
  let previous;
  for (let element = 0; element < songs.length; element++) {
    if (songs[element].classList.contains('current')) {
      current = element;
    }
    if (songs[element].classList.contains('next')) {
      next = element;
    }
    if (songs[element].classList.contains('previous')) {
      previous = element;
    }
  }

  songs[current].classList.remove('current');
  songs[next].classList.remove('next');
  songs[previous].classList.remove('previous');

  current += 1;
  next += 1;
  previous += 1;

  if (!songs[previous]) {
    previous = 0;
  }
  if (!songs[next]) {
    next = 0;
  }
  if (!songs[current]) {
    current = 0;
  }

  songs[current].classList.add('current');
  songs[next].classList.add('next');
  songs[previous].classList.add('previous');
}

export default nextElement;