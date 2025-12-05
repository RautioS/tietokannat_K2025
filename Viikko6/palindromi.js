function onPalindromi(sana) {
    sana = sana.toLowerCase().replace(/[^a-z0-9]/g, '');
    const kaannettySana = sana.split('').reverse().join('');
    return sana === kaannettySana;
}

console.log(onPalindromi("saippuakauppias"));
console.log(onPalindromi("omena"));
console.log(onPalindromi("Noon"));