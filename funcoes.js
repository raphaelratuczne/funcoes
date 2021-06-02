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