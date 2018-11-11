var eng = new Array('hello');
var vi = new Array('xin chào');
var isAdded = false;
var isNullEng = true;
var isNullVi = true;

var checkEng = () => {

  while (isNullEng) {
    if (document.getElementById('eng').value == null)
      alert('Bạn phải nhập từ Tiếng Anh!');
    else isNullEng = false;
  }

};

var checkVi = () => {

    while (isNullVi) {
      if (document.getElementById('vi').value == null)
        alert('Bạn phải nhập từ Tiếng Việt!');
      else isNullVi = false;
    }

};

document.getElementById('eng').addEventListener('change', checkEng);

document.getElementById('vi').addEventListener('change', checkVi);

document.getElementById('add').addEventListener('click', () => {
  if (isNullEng)
    alert('Bạn phải nhập từ Tiếng Anh!');
  else {
    eng.push(document.getElementById('eng').value.toLowerCase());
    isNullEng = true;
    document.getElementById('eng').value = '';
  }
    
  if (isNullVi)
    alert('Bạn phải nhập từ Tiếng Việt!');
  else {
    vi.push(document.getElementById('vi').value.toLowerCase());
    isNullVi = true;
    document.getElementById('vi').value = '';
  }

  isAdded = true;
});

document.getElementById('display').addEventListener('click', () => {
  if (isAdded) {
    var table = '<table border="1" width="500" colspacing="0" colpadding="5"><tr><th>Tiếng Anh</th><th>Tiếng Việt</th></tr>';

    for (var i = 0; i<eng.length; i++) {
      table += `<tr><td>${eng[i]}</td><td>${vi[i]}</td></tr>`;
    }

    table += '</table>';
    document.getElementById('list').innerHTML = table;

    isAdded = false;
  }
});

document.getElementById('search').addEventListener('click', () => {
  var isFound = false;
  var wordSearch = document.getElementById('engSearch').value.toLowerCase();
  for (var i = 0; i<eng.length; i++) {
    if (wordSearch==eng[i]) {
      document.getElementById('viSearch').innerHTML = vi[i];
      isFound = true;
      break;
    }
  }
  if (!isFound) alert('Not Found!');
});

document.getElementById('createNewWordBtn').addEventListener('click', () => {
  document.getElementById('index').style.display = 'none';
  document.getElementById('createNewWord').style.display = 'block';
});

document.getElementById('traCuuBtn').addEventListener('click', () => {
  document.getElementById('index').style.display = 'none';
  document.getElementById('traCuu').style.display = 'block';
});

document.getElementById('backBtn1').addEventListener('click', () => {
  document.getElementById('traCuu').style.display = 'none';
  document.getElementById('index').style.display = 'block';
});

document.getElementById('backBtn2').addEventListener('click', () => {
  document.getElementById('createNewWord').style.display = 'none';
  document.getElementById('index').style.display = 'block';
});

window.onload = () => {
  document.getElementById('index').style.display = 'block';
  document.getElementById('createNewWord').style.display = 'none';
  document.getElementById('traCuu').style.display = 'none';
};