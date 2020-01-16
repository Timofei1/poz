import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Icon24Copy from '@vkontakte/icons/dist/24/copy';
import { Div, Tabbar, TabbarItem, IOS, platform, HeaderButton, Separator, ActionSheet, IS_PLATFORM_IOS, ActionSheetItem  } from '@vkontakte/vkui';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import Icon24Newsfeed from '@vkontakte/icons/dist/24/newsfeed';
import Icon28KeyboardBotsOutline from '@vkontakte/icons/dist/28/keyboard_bots_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import connect from '@vkontakte/vk-connect';



const osName = platform();

const Persik = (props) => {
	const { go, id, faves, updFavDel, share, copied, setPopoutF } = props;
	const openShareActionSheet = (e) => {
		setPopoutF(<ActionSheet onClose={() => setPopoutF(null)}>
	 <ActionSheetItem onClick={ () => share(e) } autoclose>
	   На свою стену
	 </ActionSheetItem>
	 <ActionSheetItem onClick={ () => shareToFriend(e) } autoclose>
	   На стену друга
	 </ActionSheetItem>
	 {IS_PLATFORM_IOS && <ActionSheetItem autoclose theme="cancel">Отменить</ActionSheetItem>}
	</ActionSheet>);
	  }
  
	  const shareToFriend = async e => {
		const data = await connect.sendPromise("VKWebAppGetFriends", {});
		const id = data.users[0].id;
		if(id) share(e, id);
	  }
	return(
	<Panel id={id}>
		<PanelHeader
       left={<HeaderButton onClick={go} data-to="home">
        {osName === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      </HeaderButton>}
      >
     1 сентября</PanelHeader>
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
		<Group>
			<Div>
				<center>
					<h4>
					День особенный сегодня —<br/>
Осень яркая пришла<br/>
И мальчишек и девчонок<br/>
В школу громко позвала.<br/><br/>

На «отлично» чтоб учились,<br/>
Вам напутствие даем.<br/>
Вы гранит науки сложной<br/>
Покоряйте с каждым днем.<br/><br/>

Вдохновенья вам, таланта,<br/>
Без препятствий на пути,<br/>
Чтобы было интересно<br/>
В школу по утрам идти!<br/>

					</h4>
					<Separator style={{ margin: '12px 0' }} />
					<h4>
					Вот и осени дыхание,<br/>
Новый лист календаря.<br/>
Снова наступил День знаний —<br/>
Главный праздник сентября!<br/><br/>

Ты с хорошим настроением<br/>
В школу каждый день иди.<br/>
На любой вопрос решение<br/>
Сможешь ты тогда найти!<br/>
<br/>
И с любой задачей школьной,<br/>
Знаем, справишься шутя.<br/>
Радуйся годам веселым,<br/>
Они быстро пролетят!<br/>
<Button level='secondary' onClick={() => {
             connect.send("VKWebAppCopyText", { text: faves[id] });
             copied();
          }}  size="l" stretched ><Icon24Copy width={22} height={22}/></Button>


					</h4>
				</center>
			</Div>
		</Group>
        
		
	</Panel>

);
		}


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