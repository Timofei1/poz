import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';

import { Div, Tabbar, TabbarItem, IOS, platform, HeaderButton, Separator } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';



const osName = platform();

const Persik = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader
       left={<HeaderButton onClick={go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </HeaderButton>}
      >
      Новый год</PanelHeader>
	<Tabbar>
		<TabbarItem
            onClick={go}
            data-to="home"
            data-story="feed"
          ><Icon28KeyboardBotsOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
			data-to="persik"
			label="new"
            data-story="feed"
          ><Icon28ArticleOutline /></TabbarItem>
		  <TabbarItem
            onClick={go}
            data-to="persik1"
            data-story="feed"
            ><Icon28SettingsOutline fill="#0000FF"/></TabbarItem>
        </Tabbar>
		
        <Group title="Поздравления">
			<Div>
            <center>
				<h4>С Новым годом поздравляю<br/>
И от всей души желаю<br/>
Веселиться и смеяться,<br/>
Ни на что не обижаться,<br/>
Жить легко и без забот<br/>
Весь грядущий новый год.<br/><br/>

Наслаждаться каждым мигом<br/>
И дарить свое тепло,<br/>
Быть всегда на позитиве,<br/>
Чтоб всегда во всём везло!<br/><br/>

С Новым годом! С новым счастьем!<br/>
Смеха, мира и добра!<br/>
Пусть обходят все ненастья,<br/>
Жизнь одарит вас сполна!<br/>

</h4>
<Separator style={{ margin: '12px 0' }} />

<h4>С Новым годом! Волшебства,<br/>
Смеха, счастья и тепла,<br/>
Мира, радостей, достатка<br/>
И во всех делах порядка!<br/><br/>

Пусть все серое, плохое<br/>
Старый год возьмет с собою.<br/>
Впредь лишь светлые мгновенья<br/>
Создают пусть настроенье!<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />
<h4>Пусть в Новый год случится чудо —<br/>
В душе зажгутся огоньки<br/>
И целый год у вас не будет<br/>
Ни огорчений, ни тоски.<br/><br/>

Пусть елка с яркою звездою<br/>
В ваш дом удачу принесет,<br/>
Любовь и крепкое здоровье.<br/>
Пусть год вам сказочно везет.<br/><br/>

Под бой курантов загадайте<br/>
Свои заветные мечты<br/>
И в дом свой поскорей впускайте<br/>
Год радости и доброты.<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />
<h4>Желаю в этот Новый год<br/>
Поменьше грусти и забот,<br/>
Побольше счастья и добра,<br/>
Улыбок, нежности, тепла!<br/><br/>

Чтоб были верными друзья<br/>
И очень дружною семья,<br/>
Чтоб каждый день удачным был,<br/>
И чтоб на всё хватало сил!<br/><br/>

Ну а ещё пусть Новый год<br/>
Побольше денег принесёт,<br/>
Здоровья, мира и любви,<br/>
Чтоб в сердце не было зимы!<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />
<h4>Желаю мира и добра,<br/>
Любви, душевного тепла!<br/>
Пускай вам этот Новый год<br/>
Успех и радость принесет!<br/><br/>

Пусть Новый год откроет двери<br/>
В мир волшебства, заботы, веры.<br/>
И всё хорошее начнется!<br/>
Удача пусть вам улыбнется!<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />
<h4>С Новым годом поздравляем,<br/>
Счастья в жизни Вам желаем,<br/>
Много добрых пожеланий,<br/>
Исполненья всех мечтаний!<br/><br/>

Самых ярких впечатлений,<br/>
Самых сказочных мгновений.<br/>
Пусть Вам этот год несет<br/>
Много радостных хлопот!<br/>
</h4>
<Separator style={{ margin: '12px 0' }} />
<br/>
<br/>


			</center>
			</Div>
		</Group>	
		
		
	</Panel>
	
);

Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Persik;
