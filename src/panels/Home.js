import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import { Div, Tabbar, TabbarItem } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon24PlaySpeed from '@vkontakte/icons/dist/24/play_speed';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Поздравления</PanelHeader>
		<Tabbar>
		<TabbarItem
            onClick={go}
            data-to="home"
            data-story="feed"
          ><Icon28KeyboardBotsOutline fill="#0000FF" /></TabbarItem>
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
            ><Icon28SettingsOutline /></TabbarItem>
        </Tabbar>
        <img src="http://www.vse-pozdravleniya.ru/images/stories/novy_god_shapka.jpg" width="2000" height="200" ></img>
		<Group title="Навигационная панель">
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik2" before={
					<Icon24PlaySpeed />
				}>
					На новый год
				</Button>
				<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik3" before={
					<Icon24PlaySpeed />
				}>
					На 8 марта
				</Button>
				<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik4" before={
					<Icon24PlaySpeed />
				}>
					На день рождения
				</Button>
				<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik5" before={
					<Icon24PlaySpeed />
				}>
					9 мая
				</Button>
				<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik6" before={
					<Icon24PlaySpeed />
				}>
					1 сентября
				</Button>
				<br/>
				<Button size="xl" level="2" onClick={go} data-to="persik7" before={
					<Icon24PlaySpeed />
				}>
					Пасха
				</Button>
			</Div>
		</Group>
        
		
	</Panel>
);

Home.propTypes = {
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

export default Home;
