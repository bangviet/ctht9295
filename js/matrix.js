const names = [
	 'PHẠM NHƯ BẢN ',
	 'LÊ VIỆT BẰNG  ',
	 'BÙI NHƯ CHINH ',
	 'VƯƠNG DUY DŨNG  ',
	 'NGUYỄN HÀ ĐẢM  ',
	 'HOÀNG THỊ ĐIỆP ',
	 'HOÀNG MINH ĐỨC ',
	 'TRẦN ĐỨC GIANG ',
	 'ĐỖ THỊ THU HIỀN ',
	 'PHẠM THỊ HOAN ',
	 'NGUYỄN CHÍ HƯỚNG ',
	 'NGUYỄN TRUNG KIÊN ',
	 'TRẦN THỤC LÊ ',
	 'BẠCH THỊ DIỆP LIỄU ',
	 'HOÀNG LINH ',
	 'BÙI THÙY LINH ',
	 'NGUYỄN TIẾN LONG ',
	 'TĂNG THỊ LUYẾN ',
	 'NGUYỄN XUÂN MAI ',
	 'NGUYỄN TUẤN MINH ',
	 'ĐỖ QUANG MINH ',
	 'VƯƠNG THỊ THÚY NGA ',
	 'NGUYỄN PHƯƠNG NAM ',
	 'TRẦN LAN PHƯƠNG ',
	 'PHẠM MINH PHƯƠNG ',
	 'LÊ SỸ QUANG ',
	 'NGUYỄN KHẮC SINH ',
	 'TRẦN NHẬT TÂN ',
	 'VŨ QUỐC THÁI ',
	 'NGUYỄN THỊ MINH THẢO ',
	 'NGUYỄN QUANG THỊNH ',
	 'NGUYỄN THỊ THỤC ',
	 'ĐINH ĐỨC TOÀN ',
	 'TRẦN ĐỨC TRUNG ',
	 'NGUYỄN XUÂN TRƯỜNG ',
	 'PHẠM XUÂN TÚ ',
	 'HOÀNG HẢI VÂN '
];
const colorHex=['#fe0000','	#fff202','	#01fff4','	#7cff00'];//['#ff0000','#ffac00','#fff100','#0bff00','#00f6ff'];
for (let x = 0; x < names.length; x++) {
	var nsp=Math.floor(Math.random()*10);
	for (let y=0;y<nsp;y++){
		names[x]=' '+names[x];
	}
}
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;//Math.floor(window.innerHeight*7/4.5);
canvas.height = window.innerHeight;

const fontSize = 14;
const columns = Math.floor(canvas.width / fontSize);

const rainDrops =[];
const colSize=[];
const colColor=[];
for (let x = 0; x < columns; x++) {
	rainDrops[x] = Math.floor(Math.random()*15);
	colSize[x]=Math.floor(fontSize-Math.random()*5);
	colColor[x]=colorHex[Math.floor(Math.random()*colorHex.length)];
}
const draw = () => {
	context.fillStyle = 'rgba(0, 0, 0, 0.05)';
	context.fillRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < rainDrops.length; i++) {
		var namepos = i + 20;
		while (namepos>=names.length){
			namepos=namepos - names.length;
		}
		var txtpos = rainDrops[i] - 1;
		while (txtpos >= names[namepos].length) { 
			txtpos = txtpos - names[namepos].length; 
		}
		const text = names[namepos].charAt(txtpos);
		context.fillStyle=colColor[i];
		context.font = colSize[i] + 'px arial';
		context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
		if (rainDrops[i] * fontSize > canvas.height) {
			rainDrops[i] = 0;
		}
		rainDrops[i]++;		
	}

};

setInterval(draw, 45);