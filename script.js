document.addEventListener("DOMContentLoaded", function() {
    const composers = [
        {name: "Beethoven", link: "javascript:;"},
        {name: "Bizet", link: "javascript:;"},
        {name: "Brahms", link: "javascript:;"},
        {name: "Bruckner", link: "javascript:;"},
        {name: "Chopin", link: "javascript:;"},
        {name: "Dvorak", link: "javascript:;"},
        {name: "Grieg", link: "javascript:;"},
        {name: "Handel", link: "javascript:;"},
        {name: "Haydn", link: "javascript:;"},
        {name: "Holst", link: "javascript:;"},
        {name: "Mendelssohn", link: "javascript:;"},
        {name: "Mahler", link: "javascript:;"},
        {name: "Mozart", link: "javascript:;"},
        {name: "Mussorgsky", link: "javascript:;"},
        {name: "Schubert", link: "javascript:;"},
        {name: "Schumann", link: "javascript:;"},
        {name: "Shostakovich", link: "javascript:;"},
        {name: "Sibelius", link: "javascript:;"},
        {name: "Smetana", link: "javascript:;"},
        {name: "Strauss", link: "javascript:;"},
        {name: "Verdi", link: "javascript:;"},
        {name: "Vivaldi", link: "javascript:;"}
    ];

    const container = document.getElementById("composer-links");

    composers.forEach(composer => {
        const a = document.createElement("a");
        a.href = composer.link;
        a.textContent = composer.name;
        a.className = composer.link === "javascript:;" ? "classify-name" : "";
        container.appendChild(a);
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const baseUrl = 'https://telegraph-image-u87.pages.dev/file/';
  const images = [
    { part: '01b86bb35b554ae110964', title: '标题1', description: '描述1' },
    { part: '06c7c4ce797050f4b506f', title: '标题2', description: '描述2' },
    { part: '084ba5b036f34ac41200b', title: '标题3', description: '描述3' },
    { part: '0861c5b221422f7306a14', title: '标题4', description: '描述4' },
    { part: '0c02ef3d7e9207926667e', title: '标题5', description: '描述5' },
    { part: '0e455872072ddaa98ec7f', title: '标题6', description: '描述6' },
    { part: '0f14fa965dd548ceeafe7', title: '标题7', description: '描述7' },
    { part: '10a0000e352d415b1ccd6', title: '标题8', description: '描述8' },
    { part: '119f63139c880a4c790f4', title: '标题9', description: '描述9' },
    { part: '18544d52eb1fdbde48d60', title: '标题10', description: '描述10' },
    { part: '19a6bc04dcc34569de175', title: '标题11', description: '描述11' },
    { part: '1a8363658efaf8fbba397', title: '标题12', description: '描述12' },
    { part: '1bb8bdeebe25895d3b596', title: '标题13', description: '描述13' },
    { part: '1eeaed4df1d74d2ee380e', title: '标题14', description: '描述14' },
    { part: '20e63d352389b350800a2', title: '标题15', description: '描述15' },
    { part: '2128539807627da56ec42', title: '标题16', description: '描述16' },
    { part: '22ba34927b7f084a8264e', title: '标题17', description: '描述17' },
    { part: '233c2e6a4a8c559f42692', title: '标题18', description: '描述18' },
    { part: '23ee211b0af747c86a1bd', title: '标题19', description: '描述19' },
    { part: '264d289754951a142ee3a', title: '标题20', description: '描述20' },
    { part: '26a2b12f8abeb03baf76d', title: '标题21', description: '描述21' },
    { part: '26e19b963a3288be0c1e9', title: '标题22', description: '描述22' },
    { part: '27cebe9f134f20fea46e8', title: '标题23', description: '描述23' },
    { part: '284bbe09d2c5c8dd3c1c7', title: '标题24', description: '描述24' },
    { part: '287d9b0cce70145e323d6', title: '标题25', description: '描述25' },
    { part: '2d043190a65796c78c428', title: '标题26', description: '描述26' },
    { part: '2d5babf15de378a0a303d', title: '标题27', description: '描述27' },
    { part: '2e16c924a2ce5f2dc162b', title: '标题28', description: '描述28' },
    { part: '2e785f2b323efc2cef552', title: '标题1', description: '描述1' },
    { part: '3112e147f0dea8f88fe8b', title: '标题2', description: '描述2' },
    { part: '31cae0379bf34f9534831', title: '标题3', description: '描述3' },
    { part: '32eb525f4da4f1ebaf434', title: '标题4', description: '描述4' },
    { part: '32f7e10968951c3c9545a', title: '标题5', description: '描述5' },
    { part: '3307637b9433bd795ce86', title: '标题6', description: '描述6' },
    { part: '38d9024d121e029e47cf7', title: '标题7', description: '描述7' },
    { part: '3ecf3418c56192862f8c7', title: '标题8', description: '描述8' },
    { part: '416ba6184d8c7ef71a3ec', title: '标题9', description: '描述9' },
    { part: '433d7e1ffc9a7f0444cf0', title: '标题10', description: '描述10' },
    { part: '43414074b783870535ebb', title: '标题11', description: '描述11' },
    { part: '4380646f57d01c45d7fb4', title: '标题12', description: '描述12' },
    { part: '43f22bb6c9e34af38db24', title: '标题13', description: '描述13' },
    { part: '488cde4dd4d9b26c16faf', title: '标题14', description: '描述14' },
    { part: '48c9a624e855ea1c6ca7e', title: '标题15', description: '描述15' },
    { part: '49123c46ad7ef17e56ac4', title: '标题16', description: '描述16' },
    { part: '4c18d86344276658164c9', title: '标题17', description: '描述17' },
    { part: '4cf80220af56494c710d3', title: '标题18', description: '描述18' },
    { part: '4d3a7ac8935e513806dae', title: '标题19', description: '描述19' },
    { part: '4d6ef9afd74ec7484ad8c', title: '标题20', description: '描述20' },
    { part: '5068d340f0d10d157cf39', title: '标题21', description: '描述21' },
    { part: '51413ae84c07d397455c1', title: '标题22', description: '描述22' },
    { part: '52319887c35ae3a3aebce', title: '标题23', description: '描述23' },
    { part: '526437795856e837f7928', title: '标题24', description: '描述24' },
    { part: '52d73fd204f8992018819', title: '标题25', description: '描述25' },
    { part: '5332813a99b72d273472f', title: '标题26', description: '描述26' },
    { part: '539f0265200452dcf3860', title: '标题27', description: '描述27' },
    { part: '564285efd34a14ad9e86c', title: '标题28', description: '描述28' },
    { part: '56974250194d68fe56cb3', title: '标题29', description: '描述29' },
    { part: '58dffcd8a3e7430675863', title: '标题30', description: '描述30' },
    { part: '58eff4116c42068301bfa', title: '标题31', description: '描述31' },
    { part: '59a2133cc551bc0de48f4', title: '标题1', description: '描述1' },
    { part: '5bbd4b6739fb8c44c1543', title: '标题2', description: '描述2' },
    { part: '5e115ade42b004cc72706', title: '标题3', description: '描述3' },
    { part: '5eb0773678d629ad49252', title: '标题4', description: '描述4' },
    { part: '63076c474a4d9e7f492ba', title: '标题5', description: '描述5' },
    { part: '65a685fc278a970a675cc', title: '标题6', description: '描述6' },
    { part: '660f29827b59cee9c40e7', title: '标题7', description: '描述7' },
    { part: '6713cab09afdd4d0b2428', title: '标题8', description: '描述8' },
    { part: '68fcb266efca39d3d8fb9', title: '标题9', description: '描述9' },
    { part: '6a2756e57dec8c4fbad47', title: '标题10', description: '描述10' },
    { part: '6c651f5aded422600bb75', title: '标题11', description: '描述11' },
    { part: '6d100513de6b962a0af10', title: '标题12', description: '描述12' },
    { part: '6d529cb1bb3a7ea1045aa', title: '标题13', description: '描述13' },
    { part: '6ef3b3f8efcfbc13ee406', title: '标题14', description: '描述14' },
    { part: '703b51f7719af636289b4', title: '标题15', description: '描述15' },
    { part: '70c67c62784fae7eda6a2', title: '标题16', description: '描述16' },
    { part: '71aa6ad8367cde8a83f0f', title: '标题17', description: '描述17' },
    { part: '71c1648c331db0023e919', title: '标题18', description: '描述18' },
    { part: '721f709108ae99de1df36', title: '标题19', description: '描述19' },
    { part: '7317decaf94d51d335ba9', title: '标题20', description: '描述20' },
    { part: '7427f70bfa49067045004', title: '标题21', description: '描述21' },
    { part: '77aecda405935387a47cc', title: '标题22', description: '描述22' },
    { part: '7889c739606e09c21c9d9', title: '标题23', description: '描述23' },
    { part: '7a6acada0fb3956447eb3', title: '标题24', description: '描述24' },
    { part: '7aff568ea85d072d9c470', title: '标题25', description: '描述25' },
    { part: '7b281d62e46e66597d6c0', title: '标题26', description: '描述26' },
    { part: '7cee4caa07bcf3a417647', title: '标题27', description: '描述27' },
    { part: '7ddac31cce4f9f8c8eff2', title: '标题28', description: '描述28' },
    { part: '7fd1d94b4f7c606c6034c', title: '标题29', description: '描述29' },
    { part: '803e3e5969faf59a48255', title: '标题30', description: '描述30' },
    { part: '81869578c155336099bd0', title: '标题31', description: '描述31' },
    { part: '837126b77a2d6f4b8911d', title: '标题32', description: '描述32' },
    { part: '83b5f9159ebe8677f032a', title: '标题33', description: '描述33' },
    { part: '83f2316b2503066c9875a', title: '标题34', description: '描述34' },
    { part: '869c317b72da71c9a4077', title: '标题35', description: '描述35' },
    { part: '8818bb20fd72efe29b5f5', title: '标题1', description: '描述1' },
    { part: '8c9a6a0b44b5ff67c6240', title: '标题2', description: '描述2' },
    { part: '8ea5c596578ed87fade7c', title: '标题3', description: '描述3' },
    { part: '8f7e2f348510a0a6b3546', title: '标题4', description: '描述4' },
    { part: '901e5d462af0b59040505', title: '标题5', description: '描述5' },
    { part: '944b780943fb38e82710d', title: '标题6', description: '描述6' },
    { part: '94cac5d916bf8d8852eff', title: '标题7', description: '描述7' },
    { part: '967d3b177516ad4d8cd6c', title: '标题8', description: '描述8' },
    { part: '97bdfca071f10d5e43c48', title: '标题9', description: '描述9' },
    { part: '97e8c658c23fcbe9dff7d', title: '标题10', description: '描述10' },
    { part: '98af2903578ba61d6b65a', title: '标题11', description: '描述11' },
    { part: '99e8469bba8fb14517684', title: '标题12', description: '描述12' },
    { part: '9b45eb5d6b78eb8011bf5', title: '标题13', description: '描述13' },
    { part: '9bde121a0327956c7cffa', title: '标题14', description: '描述14' },
    { part: '9cc875fd51165e9fc74f3', title: '标题15', description: '描述15' },
    { part: '9cdbfd445b8f884b70997', title: '标题16', description: '描述16' },
    { part: '9da7adafa772abb05f7a1', title: '标题17', description: '描述17' },
    { part: '9e21ffba8eab5f9b3344a', title: '标题18', description: '描述18' },
    { part: '9edfd6434918dfb2f9542', title: '标题19', description: '描述19' },
    { part: '9fa1338b52ebaddda311f', title: '标题20', description: '描述20' },
    { part: 'a3a52214db94fee0286cf', title: '标题21', description: '描述21' },
    { part: 'a3cb42b1d39e2958f9f42', title: '标题22', description: '描述22' },
    { part: 'a47e2d6b5df8834231013', title: '标题23', description: '描述23' },
    { part: 'a51be3b4805c94240da1a', title: '标题24', description: '描述24' },
    { part: 'a6186ddac06747636e414', title: '标题25', description: '描述25' },
    { part: 'a6f3935536951289648d4', title: '标题26', description: '描述26' },
    { part: 'a72c7dcb2c98a67a8ae7f', title: '标题27', description: '描述27' },
    { part: 'a7fa88ac982a4ca1e225e', title: '标题28', description: '描述28' },
    { part: 'a8a723bae010a7ac3613b', title: '标题29', description: '描述29' },
    { part: 'a98c128dc189d204881f6', title: '标题30', description: '描述30' },
    { part: 'aac9c2261dddc287be719', title: '标题31', description: '描述31' },
    { part: 'ac70e87a474e44d16848a', title: '标题32', description: '描述32' },
    { part: 'ad546f51d92eb5c6bb176', title: '标题33', description: '描述33' },
    { part: 'ad67a9a3620beef4e178a', title: '标题34', description: '描述34' },
    { part: 'b0bd5ceb4545d6a1c7414', title: '标题35', description: '描述35' },
    { part: 'b6308dcdf8f69faab56de', title: '标题1', description: '描述1' },
    { part: 'b82cd148ebe7b2a6214f8', title: '标题2', description: '描述2' },
    { part: 'b8cf1e5dd2232d6f94a45', title: '标题3', description: '描述3' },
    { part: 'b90bedf58f5abeca91068', title: '标题4', description: '描述4' },
    { part: 'b930bca21db308b1317f9', title: '标题5', description: '描述5' },
    { part: 'ba6330af17547524f5964', title: '标题6', description: '描述6' },
    { part: 'bb8d65afbd5095c77195b', title: '标题7', description: '描述7' },
    { part: 'bc64f31224fd786769b40', title: '标题8', description: '描述8' },
    { part: 'c1c8a6b1ea50a7ef73358', title: '标题9', description: '描述9' },
    { part: 'c28783efb5af8b9b3959a', title: '标题10', description: '描述10' },
    { part: 'c53b6125cfa3d573667ce', title: '标题11', description: '描述11' },
    { part: 'c57ca88023ab9814d923a', title: '标题12', description: '描述12' },
    { part: 'c62872171376904339bc9', title: '标题13', description: '描述13' },
    { part: 'c7ba5f1adf0be050361a1', title: '标题14', description: '描述14' },
    { part: 'c7c4b4dd0277db346c9c2', title: '标题15', description: '描述15' },
    { part: 'c8388bd823ab8bc9ec09c', title: '标题16', description: '描述16' },
    { part: 'c98da68a77ea26c2bd41e', title: '标题17', description: '描述17' },
    { part: 'c9d8ee616c81dff21a538', title: '标题18', description: '描述18' },
    { part: 'ca687026e82cbec259465', title: '标题19', description: '描述19' },
    { part: 'cef56eec1d0e7583d4a37', title: '标题20', description: '描述20' },
    { part: 'cf1c8a16dbe01c0b87cc9', title: '标题21', description: '描述21' },
    { part: 'd141a7c1c6882dc3f0c27', title: '标题22', description: '描述22' },
    { part: 'd204cf4713cfe5897b71a', title: '标题23', description: '描述23' },
    { part: 'd41e1277db3a67d589541', title: '标题24', description: '描述24' },
    { part: 'd55bfcdb264c993d2c8ae', title: '标题25', description: '描述25' },
    { part: 'd71f3bdeea37a3838c450', title: '标题26', description: '描述26' },
    { part: 'd74a043681949c80370a9', title: '标题27', description: '描述27' },
    { part: 'd7dcba708298512c6a288', title: '标题28', description: '描述28' },
    { part: 'd8e4062df180d61d38dff', title: '标题29', description: '描述29' },
    { part: 'db2776e4f0883161d407d', title: '标题30', description: '描述30' },
    { part: 'dbda3184f09c2401a45d6', title: '标题31', description: '描述31' },
    { part: 'decd6b5e2dc092206fe3a', title: '标题32', description: '描述32' },
    { part: 'e15e0f2507b4a7778c5d5', title: '标题33', description: '描述33' },
    { part: 'e257461dd8def91c03320', title: '标题34', description: '描述34' },
    { part: 'e88cbdb1e22f97ed57ca2', title: '标题35', description: '描述35' },
    { part: 'e8dcfae9c155dd2edc248', title: '标题36', description: '描述36' },
    { part: 'e8dd9a781575f33c9464b', title: '标题37', description: '描述37' },
    { part: 'eb7c53ed67a54f0856673', title: '标题38', description: '描述38' },
    { part: 'eb8cc220581f7c620f1dc', title: '标题39', description: '描述39' },
    { part: 'ec5164eb42d094f989419', title: '标题40', description: '描述40' },
    { part: 'ec8f6046ffc80637584e5', title: '标题41', description: '描述41' },
    { part: 'ed26a5a8279f1bdcb4a8f', title: '标题42', description: '描述42' },
    { part: 'ed6d0c7853e59fc4fff84', title: '标题43', description: '描述43' },
    { part: 'ee40b6bc1008cd6a92ee5', title: '标题44', description: '描述44' },
    { part: 'f1399d3dfc55728926b96', title: '标题45', description: '描述45' },
    { part: 'f53dbcc109f3abadade1c', title: '标题46', description: '描述46' },
    { part: 'f6e818ff5c296f8de198f', title: '标题47', description: '描述47' },
    { part: 'f7b60c13a59d211c6caa1', title: '标题48', description: '描述48' },
    { part: 'f7bcd1ee0f7d410312146', title: '标题49', description: '描述49' },
    { part: 'f8d1fecaa5fd71853c0d7', title: '标题50', description: '描述50' },
    { part: 'fb08ba7519ac7c0e6c9c6', title: '标题51', description: '描述51' },
    { part: 'fb31143c0ffc13e311d03', title: '标题52', description: '描述52' },
    { part: 'fdce333f07650d85fef8f', title: '标题53', description: '描述53' },
    { part: 'fe1ae1ef293f57b30bf7e', title: '标题54', description: '描述54' },
    { part: 'fe40294b807ed8bbbacb4', title: '标题55', description: '描述55' },
    { part: 'ff3fec726551e490dd6e2', title: '标题55', description: '描述55' },
    { part: 'ff99693bbb7e9cb25a5c7', title: '标题55', description: '描述55' },
  ];

  const container = document.querySelector('.card-container');

  images.forEach(image => {
    const fullUrl = `${baseUrl}${image.part}.jpg`;

    const card = document.createElement('div');
    card.className = 'card';
    card.style.backgroundImage = `url(${fullUrl})`;
    card.style.backgroundSize = 'contain';
    card.style.backgroundRepeat = 'no-repeat';

    const content = document.createElement('div');
    content.className = 'content';

    const title = document.createElement('h2');
    title.textContent = image.title;

    const description = document.createElement('p');
    description.textContent = image.description;

    const button = document.createElement('button');
    button.textContent = '阅读更多';
    button.addEventListener('click', () => {
      alert(`你点击了 ${image.title}`);
    });

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);
    card.appendChild(content);

    container.appendChild(card);
  });
});


