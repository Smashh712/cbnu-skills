import {html, render} from "../../web_modules/lit-html.js";
import {APP_VERSION} from "./../config.js";
import "../atoms/button.js";

/**
 * Opens the dialog dialog.
 * @returns {Promise<void>}
 */
export async function openHelp () {
	const {openDialog} = await import("../../web_modules/web-dialog.js");
	const {$dialog, resolver} = openDialog({
		$content: $dialog => render(html`
			<style>
				* {
					box-sizing: border-box;
				}
				
				h2 {
					margin: var(--spacing-xl) 0 var(--spacing-m);
				}
				
				h3 {
					margin: var(--spacing-m) 0 var(--spacing-s);
				}
				
				p {
					margin: 0 0 var(--spacing-m);
				}
				
				a {
					color: var(--link);
				}
				
				#close {
					position: absolute;
					top: 0;
					right: 0;
					padding: var(--spacing-l);
					cursor: pointer;
					font-size: 1.5rem;
				}
				
				#version {
					position: absolute;
					right: var(--spacing-m);
					bottom: var(--spacing-m);
					color: var(--shade-500);
				}
				
			</style>
			
			<div tabindex="0"></div>
			<ws-button id="close" @click="${() => $dialog.close()}" aria-label="Close dialog">✖️</ws-button>
			
			<h2>충북대 도우미 FAQ</h2>

			<h3이것은 무엇인가요?</h3>
			<p>수 많은 신입생과 충북대 재학생을 위해 만든 온라인 가이드북입니다. 여러분의 시간을 단축시켜주고 양질의 정보를 제공할 수 있습니다.</p>

			<h3>어떻게 도울 수 있나요?</h3>
			<p>저희는 가난한 대학생입니다. 오른쪽에 있는 후원 버튼을 눌러주시면 그것이 돕는 것 입니다. 그 외에도 정보나 오류가 있으면 제보 부탁드립니다.</a>!</p>

			<h3>어떻게 연락할 수 있나요?</h3>
			<p>귀중한 메일 주소를 알려드리겠습니다. <a target="_blank" href="mailto:smashh712@g.cbnu.ac.kr">smashh712@g.cbnu.ac.kr</a> 메일로 편히 연락주시거나 혹은 컴퓨터 공학과의 BML 연구실을 방문하시면 제작자를 만날 수 있습니다.</p>
			
			<span id="version">v${APP_VERSION}</span>
		`, $dialog)
	});

	// Flip the colors
	$dialog.style.setProperty(`--dialog-bg`, `var(--foreground)`);
	$dialog.style.setProperty(`--dialog-color`, `var(--background)`);

	return resolver;
}