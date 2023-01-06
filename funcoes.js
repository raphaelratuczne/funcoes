// gera uma key unica
function generateUniqueKey() {
  return (new Date().getTime() + Math.random()).toString(16);
}

// gerar cpf
gerarCpf = () => {
    const aleatorio = () => {
      const aleat = Math.floor(Math.random() * 999);
      return ('' + aleat).padStart(3, '0'); 
    }

    const dig = (n1, n2, n3, n4) => { 
      let nums = n1.split('').concat(n2.split(''), n3.split(''));

      if (n4){
        nums[9] = n4;
      }

      let x = 0;

      for (let i = (n4 ? 11:10), j = 0; i >= 2; i--, j++) {
        x += parseInt(nums[j]) * i;
      }

      const y = x % 11;
      
      return y < 2 ? 0 : 11 - y; 
    }

  const num1 = aleatorio();
  const num2 = aleatorio();
  const num3 = aleatorio();

  const dig1 = dig(num1, num2, num3);
  const dig2 = dig(num1, num2, num3, dig1);

  return `${num1}.${num2}.${num3}-${dig1}${dig2}`;
}


// path windows para configurar android studio
variaveis:
JAVA_HOME C:\Program Files\Java\jdk1.8.0_171
ANDROID_HOME C:\android\sdk

path:
%ANDROID_HOME%\tools
%ANDROID_HOME%\tools\bin
%ANDROID_HOME%\platform-tools
C:\Program Files\Git\usr\bin
C:\Program Files\Git\mingw64\libexec\git-core

//retorna se é primo
function isPrime(element) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

// erro node sass
run npm rebuild node-sass or sudo npm rebuild node-sass


// le um arquivo como base64
getBase64(file: File): Promise<string | ArrayBuffer> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
}

// remove valor inicial de base64
removeStringOnArrayBuffer(value: string, type?: string): string {
  if (type) {
    return value.replace(`data:${type};base64,`, '');
  } else {
    const arrTermos = [
      'data:image/jpeg;base64,',
      'data:application/octet-stream;base64,',
      'data:application/pdf;base64,',
      'data:image/png;base64,'
    ];
    return value.replace(new RegExp(arrTermos.join('|')), '');
  }
}

// le uma uri como blob
async toBlob(uri) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  } catch (error) {
    console.log('blob error',error);
  }
}

// le uma url como arquivo
toDataUrl(url): Promise<any> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.onerror = function () {
        reject(reader.error);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}

// coloca 3 pontos em um texto que ultrapassa um espaço
.tres-pontinhos {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100px; // precisa ter um tamanho maximo
  display: block;
}

// arvore de natal feita com funcao javascript
[10,2].forEach(row => {
  new Array(row).fill('').forEach((v, i) => {
    console.log([
      ...new Array(9-i).fill('.'),
      ...new Array(1+i*2).fill('^'),
      ...new Array(9-i).fill('.')
    ].join(''));
  });
});
/*
.........^.........
........^^^........
.......^^^^^.......
......^^^^^^^......
.....^^^^^^^^^.....
....^^^^^^^^^^^....
...^^^^^^^^^^^^^...
..^^^^^^^^^^^^^^^..
.^^^^^^^^^^^^^^^^^.
^^^^^^^^^^^^^^^^^^^
.........^.........
........^^^........
*/