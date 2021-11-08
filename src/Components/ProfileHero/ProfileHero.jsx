import './ProfileHero.scss';
import content from '../../Localization/Content.js';
import useLang from '../../Hooks/useLang.js';
import useTheme from '../../Hooks/useTheme.js';

import ProfileImage from '../../Assets/Images/profile_hero.png';
import ProfileUser from '../../Assets/Images/user.png';
import UserImage from '../../Assets/Images/img.png';

import LocationIcon from '../Lib/Location.jsx';
import LinkIcon from '../Lib/Link.jsx';
import ClockIcon from '../Lib/Clock.jsx';
import CalendarIcon from '../Lib/Calendar.jsx';
import PinnedIcon from '../Lib/Pinned.jsx';

import Ellipsis from '../Lib/Ellipsis.jsx';
import CommentIcon from '../Lib/Comment.jsx';
import RetweetIcon from '../Lib/Retweet.jsx';
import LikeIcon from '../Lib/Like.jsx';
import ShareIcon from '../Lib/Share.jsx';
import StatisticsIcon from '../Lib/Statistics.jsx';

function ProfileHero() {
	const [lang] = useLang();
	const [theme] = useTheme();

	return (
		<>
			<section className={`profile-hero ${theme === 'dark' && 'dark'}`}>
				<img
					src={ProfileImage}
					alt='User img'
					width='910'
					height='280'
				/>

				<div className='profile-hero__content'>
					<div className='profile-hero__user'>
						<img
							className='profile-hero__user-image'
							src={ProfileUser}
							alt='User img'
							width='150'
							height='150'
						/>
						<button className='profile-hero__user-profile--btn'>
							{content[lang].profile.hero.edit}
						</button>
						<strong className='profile-hero__user-name'>
							Bobur <br />
						</strong>
						<a
							className='profile-hero__user-account'
							href='mailto:@bobur_mavlonov'>
							@bobur_mavlonov
						</a>
						<p className='profile-hero__user-position'>
							UX&UI designer at &nbsp;
							<a
								href='mailto:@abutechuz'
								className='profile-hero__user-link'>
								@abutechuz
							</a>
						</p>
						<ul className='profile-hero__user-infos'>
							<li className='profile-hero__user-info'>
								<LocationIcon />
								Joined May 2020
							</li>

							<li className='profile-hero__user-info'>
								<LinkIcon />
								<a
									href='#link'
									className='profile-hero__user-link'>
									t.me/boburjon_mavlonov
								</a>
							</li>

							<li className='profile-hero__user-info'>
								<ClockIcon />
								Born November 24, 2000
							</li>

							<li className='profile-hero__user-info'>
								<CalendarIcon />
								Joined May 2020
							</li>
						</ul>
						<ul className='profile-hero__user-follows'>
							<li className='profile-hero__user-follow'>
								<strong>67</strong>{' '}
								<span className='profile-hero__user-follow--text'>
									Following
								</span>
							</li>
							<li className='profile-hero__user-follow'>
								<strong>47</strong>{' '}
								<span className='profile-hero__user-follow--text'>
									Followers
								</span>
							</li>
						</ul>

						<ul className='profile-hero__user-menu--list'>
							<li className='profile-hero__user-menu--item active'>
								{content[lang].profile.hero.menu.link1}
							</li>
							<li className='profile-hero__user-menu--item'>
								{content[lang].profile.hero.menu.link2}
							</li>
							<li className='profile-hero__user-menu--item'>
								{content[lang].profile.hero.menu.link3}
							</li>
							<li className='profile-hero__user-menu--item'>
								{content[lang].profile.hero.menu.link4}
							</li>
						</ul>
					</div>

					<div className='profile-hero__pinned'>
						<PinnedIcon
							color={theme === 'dark' ? '#148f9d' : 'black'}
						/>
						<h3 className='profile-hero__pinned-text'>
							Pinned Tweet
						</h3>
					</div>

					<ul className='profile-hero__user-tweets'>
						<li className='profile-hero__user-tweet'>
							<img
								src={ProfileUser}
								alt='User img'
								width='60'
								height='60'
							/>

							<div className='profile-hero__user-tweet--info'>
								<strong className='users__name'>Bobur</strong>
								<a
									className='users__account'
									href='mailto:@RajLahoti · 22m'>
									@bobur_mavlonov · Apr 1
								</a>

								<Ellipsis />
								<p className='users__post'>
									4-kursni tugatgunimcha kamida bitta biznesim
									bo'lishini, uylanish uchun moddiy jihatdan
									to'la-to'kis tayyor bo'lishni, sog'lik va
									jismoniy holatni normallashtirishni reja
									qildim
								</p>

								<ul className='users__icons'>
									<li className='users__icon'>
										<CommentIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 10
									</li>
									<li className='users__icon'>
										<RetweetIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 1
									</li>
									<li className='users__icon'>
										<LikeIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 8
									</li>
									<li className='users__icon'>
										<ShareIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
									<li className='users__icon'>
										<StatisticsIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
								</ul>
							</div>
						</li>

						<li className='profile-hero__user-tweet'>
							<img
								src={ProfileUser}
								alt='User img'
								width='60'
								height='60'
							/>

							<div className='profile-hero__user-tweet--info'>
								<strong className='users__name'>Bobur</strong>
								<a
									className='users__account'
									href='mailto:@RajLahoti · 22m'>
									@bobur_mavlonov · Apr 1
								</a>

								<Ellipsis />

								<p className='users__post'>
									Bizda shunaqa bir illat bor: gap bo'lsa
									bo'ldi, nima deyayotganimizga qarab ham
									o'tirmaymiz.
								</p>

								<p className='users__post'>
									Bitta biznes trener nito gapirib qo'ysa,
									hamma biznes trenerlar yomonga chiqadi
									slishkom aqlli odamlar nazdida.
								</p>

								<p className='users__post'>
									Gap faqat biznes trenerlar haqida emas.
								</p>

								<ul className='users__icons'>
									<li className='users__icon'>
										<CommentIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 10
									</li>
									<li className='users__icon'>
										<RetweetIcon color={'#0cb245'} />
										&nbsp; 1
									</li>
									<li className='users__icon'>
										<LikeIcon color={'#ef1c5c'} />
										&nbsp; 8
									</li>
									<li className='users__icon'>
										<ShareIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
									<li className='users__icon'>
										<StatisticsIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
								</ul>
							</div>
						</li>

						<li className='profile-hero__user-tweet'>
							<img
								src={ProfileUser}
								alt='User img'
								width='60'
								height='60'
							/>

							<div className='profile-hero__user-tweet--info'>
								<strong className='users__name'>Bobur</strong>
								<a
									className='users__account'
									href='mailto:@RajLahoti · 22m'>
									@bobur_mavlonov · Apr 1
								</a>

								<Ellipsis />
								<p className='users__post'>
									A bo'pti maskamasman
								</p>

								<img
									src={UserImage}
									alt='User img'
									width='679'
									height='453'
								/>

								<ul className='users__icons'>
									<li className='users__icon'>
										<CommentIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 10
									</li>
									<li className='users__icon'>
										<RetweetIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 1
									</li>
									<li className='users__icon'>
										<LikeIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
										&nbsp; 8
									</li>
									<li className='users__icon'>
										<ShareIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
									<li className='users__icon'>
										<StatisticsIcon
											color={
												theme === 'dark'
													? 'white'
													: 'black'
											}
										/>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default ProfileHero;
