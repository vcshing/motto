Url = {
    get get(){
        var vars= {};
        if(window.location.search.length!==0)
            window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
                key=decodeURIComponent(key);
                if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
                else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
            });
        return vars;
    }
};

function randomSort(a,b) {
    return( parseInt( Math.random()*10 ) %2 );
}


	var configlist0 = {
		"title": "Which Restaurant",
		"content": 
		[
{"Name": "人生由來不滿百，安得朝夕事隱憂—— 明·于謙"},
{"Name": "我們應該順應自然，立在真實上，求得人生的光明，不可陷入勉強、虛偽的境界，把真正人生都歸幻滅。—— 李大釗"},
{"Name": "人生並非遊戲，因此，我們並沒有權利只憑自己的意願放棄它。—— 列夫·托爾斯泰"},
{"Name": "人生沒有追求，如同車頭沒有引擎；生活缺乏熱情，恰似車廂沒有空氣。—— 佚名"},
{"Name": "我也說不出人生在世，是不是一件容易事兒。—— 高爾斯華綏"},
{"Name": "必須記住我們學習的時間是有限的。時間有限，不只由於人生短促，更由於人的紛繁。我們應該力求把我們所有的時間用去做最有益的事。—— 斯賓塞"},
{"Name": "人生的目的，在發展自己的生命，可是也有為發展生命必須犧牲生命的時候。因為平凡的發展，有時不如壯烈的犧牲足以延長生命的音響和光華。絕美的風景，多在奇險的山川。絕壯的音樂，多是悲涼的韻調。高尚的生活，常在壯烈的犧牲中。—— 李大釗"},
{"Name": "理想是照亮人生之路的火炬，只是別乾涸了奮鬥的油源。—— 佚名"},
{"Name": "閱讀的最大理由是想擺脫平庸，早一天就多一份人生的精彩；遲一天就多一天平庸的困擾。—— 余秋雨"},
{"Name": "從某種意義上講，人生的坎坷是人的精神財富。—— 郝聯聯"},
{"Name": "靜思能事理；誠樸貫人生。—— 《對聯集錦》"},
{"Name": "人生的真正意義在於貢獻，而不是索取。—— 張海迪"},
{"Name": "生命多少用時間計算，生命的價值用貢獻計算。從物質的消耗中謀求歡樂，才是人生真正的悲哀。—— 裴多菲"},
{"Name": "不管怎樣的事情，都請安靜地愉快吧!這是人生。我們要依樣地接受人生，勇敢地、大膽地，而且永遠地微笑著。—— 盧森堡"},
{"Name": "唯有自愛，自識自製，指引人生，才能導出神聖的力量。—— 丁尼生"},
{"Name": "儘管世界和人生是壞透了，其中卻有一件東西永遠是好，那便是青春。—— 顯克維奇"},
{"Name": "人生如舞台，如果你單單敘述一件事情，就無法打動人心。所以你必須生動活潑的把事實編造成一種喜劇的形態，也就是以喜劇的手法來處理你的人生，使你的周圍洋溢著歡欣鼓舞的氣氛。—— 卡耐基"},
{"Name": "人生的跑道是固定的。大自然只給人一條路線，而這條路線也只能夠跑一次。人生的各個階段，都各自分配了適當特質：童年的軟弱，青春期的魯莽，中年的嚴肅，老人的閱歷，都各結出自然的果實，須在它當令的時候予以儲存。每個階段都有值得人們享受愛好的事物。—— 西塞羅"},
{"Name": "人生莫懼少年貧。—— （清）曾國藩"},
{"Name": "有三件事人類都要經歷：出生生活和死亡。他們出生時無知無覺，死到臨頭，痛不欲生，活著的時候卻又怠慢了人生。—— 拉布呂耶爾"},
{"Name": "確切的人生是：保持一種適宜狀態的與世無爭的生活。—— 蒙田"},
{"Name": "既是灌水，本無經典可言。但妙就妙在用這些話來灌水，不僅言精意深，而兼容性極佳，無論何種情況，都可隨灌隨用。 （一）、記住該記住的，忘記該忘記的。改變能改變的，接受不能改變的。 （二）、怨言是上天得到人類最大的供物，也是人類禱告中最真誠的部分。 （三）、智慧的代價是矛盾。這是人生對人生觀開的玩笑。 （四）、令狐沖說：有些事情本身我們無法控制，只好控制自己。 （五）、魚對水說你看不到我的眼淚，因為我在水里。水說我能感覺到你的眼淚，因為你在我心裡。 （六）、你出生的時候，你哭著，周圍的人笑著；你逝去的時候，你笑著，而周圍的—— 佚名"},
{"Name": "要充分利用人生——人生短促，很快就消逝了。—— 奧爾迪斯"},
{"Name": "在人生的路上，將血一滴一滴地滴過去，以飼別人，雖自覺漸漸瘦弱，也以為快樂。—— 魯迅"},
{"Name": "友情與事業代表著人生兩大樂趣，而要想擁有這兩大樂趣，一是要開朗，一是要勤勞。—— 羅蘭"},
{"Name": "仇恨，蠶食著心靈；熱愛，舒展了人生。—— 佚名"},
{"Name": "青年人陷於不義的時候，不敢對良心的鏡子照一照，成年人卻不怕正視，人生兩個階段的不同完全在於這一點。—— 巴爾扎克"},
{"Name": "理想的琴鍵扣動奮鬥的琴弦，才奏出人生美妙動聽的樂章。—— 佚名"},
{"Name": "陽光照亮世界，諺語啟示人生—— 民諺"},
{"Name": "品格是最難下的定義，但它卻是人生中最具影響而重要的東西。—— 諺語"},
{"Name": "人生是一場無休無歇無情的戰鬥，凡是要做個夠得上稱為人的人，都得時時刻刻向無形的敵人作戰。本能中那些致人死命的力量，亂人心意的慾望，曖昧的念頭，使你墮落使你自行毀滅的念頭，都是這一類的頑敵。—— 羅曼·羅蘭"},
{"Name": "人生不滿百，常懷千歲憂。—— 佚名"},
{"Name": "人生的目的，在發展自己的生命，可是也有為發展生命必須犧牲生命的時候。—— 李大釗"},
{"Name": "人生最大的快樂是在自己並不需要額外去追求快樂的時候。—— 佚名"},
{"Name": "想想你的母親，她對人生要求該多麼微小，可是，落在她頭上的又是怎樣的一種命運？—— 屠格涅夫"},
{"Name": "可憐一個人對於幸福太容易上癮了！等到自私的幸福變成了人生惟一的目標之後，不久人生就變得沒有目標。—— 羅曼·羅蘭"},
{"Name": "倘若用天平來衡量人生的價值，貢獻應是平上最重的法碼。—— 佚名"},
{"Name": "人生包括兩部分：過去的是一個夢；未來的是一個希望。—— 佚名"},
{"Name": "盡力做好一件事，實乃人生之首務。—— 富蘭克林"},
{"Name": "在我們所具有的一切缺點中，最為粗魯的乃是輕視我們的存在。了，越愛人生，就越不能服膺生活者的條件。如果只為了凝視人生，要意識做什麼呢？—— 杜·伽爾"},
{"Name": "書籍裡的道理是高貴的，老一輩的學者汲取了他周圍的世界，經過推敲，在心裡把它重新整理好，再陳述出來。它進入到他心裡的過程是人生，從裡面出來的卻是真理；進去的時候是短暫的動作，出來的卻是不朽的思想；進去的是瑣事，出來的卻是詩歌。它過去是死的事實，而現在則成了活的思想。它既可以守，又可以攻；它一忽兒忍耐，一忽兒飛翔，一忽兒又給人以靈感。—— 愛默生"},
{"Name": "我認為人生最美好的主旨和人類生活最幸福的結果，無過於學習了。—— 巴爾扎克"},
{"Name": "人生最為重要的事是發現自己。—— [挪威]南森"},
{"Name": "當你服務他人的時候，人生不再是毫無意義的。—— 葛登納"},
{"Name": "沒有愛情的人生是什麼？是沒有黎明的長夜！—— 彭斯"},
{"Name": "人生在勤，勤則不匱；戶樞不蠹，流水不腐。—— （元）許名奎"},
{"Name": "不管生活多麼嚴峻，我總是和自己在一起，我將在每天的生活中，汲取有益的東西，理解人生的意義。—— 佚名"},
{"Name": "從遠處看，人生的不想還很有詩意呢，一個人最怕庸庸碌碌的生活。—— 羅曼.羅蘭"},
{"Name": "人生的長短不是以時間衡量的，而是以思想和行為去衡量。—— 佚名"},
{"Name": "人生用物，各有天限；夏澇太多，必有秋旱。—— （元）許名奎"}
		]
	}



	var configlist1 = {
		"title": "人生",
		"content": 
		[
			{
				"Name": "Yes",
			},
			{
				"Name": "No",
			}
			,
			{
				"Name": "No222",
			}
		]
	}
	
	
	var configlist2 = {
		"title": "Winner",
		"content": 
		[
			{
				"Name": "Peter",
			},
			{
				"Name": "Skyler",
			},
			{
				"Name": "Alvin",
			}
		]
	}
	
	
function setDefaultWholeList(){
	var save = new LocalStorageManager();
	var wholeListArr=[];


	
	wholeListArr[0]=configlist0;
	wholeListArr[1]=configlist1;
	wholeListArr[2]=configlist2;
	save.setGameState(wholeListArr)
}