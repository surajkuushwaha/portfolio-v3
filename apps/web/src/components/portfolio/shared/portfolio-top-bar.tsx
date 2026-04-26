// @ts-nocheck
import { DATA, NAV_ITEMS } from "../portfolio-data";
import { scrollToSection } from "./scroll-to";
import { ThemeIcon } from "./theme-icon";
import "@/styles/portfolio/portfolio-top-bar.css";

export function PortfolioTopBar({
	scrolled,
	activeSection,
	isMobileNavOpen,
	isDark,
	onOpenCommandPalette,
	onToggleTheme,
	onToggleMobileNav,
	onCloseMobileNav,
}) {
	const wrapperClasses = [
		"topbar-fx",
		"topbar",
		"z-20 my-2 mb-6 flex items-center justify-between rounded-[12px] border px-[14px] py-3",
		"sticky top-4 transition-[background,border-color,box-shadow] duration-200",
		"max-[720px]:fixed max-[720px]:bottom-[max(14px,env(safe-area-inset-bottom))] max-[720px]:left-5 max-[720px]:right-5",
		"max-[720px]:top-auto max-[720px]:m-0 max-[720px]:gap-3 max-[720px]:rounded-[11px] max-[720px]:px-3 max-[720px]:py-2",
		scrolled ? "is-scrolled scrolled" : "",
	]
		.filter(Boolean)
		.join(" ");

	const desktopLinkBaseClasses =
		"[font-family:var(--mono)] rounded-md bg-transparent px-2.5 py-1.5 text-xs text-[color:var(--muted)] transition-colors duration-150 hover:bg-[color:var(--hover)] hover:text-[color:var(--fg)]";
	const desktopLinkActiveClasses =
		"nav-link-active-dot active bg-[color:var(--hover)] text-[color:var(--fg)]";
	const mobileLinkBaseClasses =
		"[font-family:var(--mono)] rounded-[7px] bg-transparent px-2.5 py-[9px] text-xs text-[color:var(--muted)] transition-colors duration-150 hover:bg-[color:var(--hover)] hover:text-[color:var(--fg)]";
	const mobileLinkActiveClasses =
		"nav-link-active-dot active bg-[color:var(--hover)] text-[color:var(--fg)]";

	return (
		<div className={wrapperClasses}>
			<a
				href="#top"
				className="font-medium text-[13px] tracking-[-0.01em] [font-family:var(--mono)] max-[720px]:min-w-0 max-[380px]:max-w-[145px] max-[720px]:overflow-hidden max-[720px]:text-ellipsis max-[720px]:whitespace-nowrap max-[720px]:text-xs"
			>
				{DATA.handle}
				<span className="text-[color:var(--accent)]">_</span>
			</a>
			<nav className="flex items-center gap-[2px] max-[720px]:shrink-0 max-[720px]:gap-1">
				<div className="flex items-center gap-[2px] max-[720px]:hidden">
					{NAV_ITEMS.map(([id, label]) => (
						<a
							key={id}
							href={`#${id}`}
							className={
								activeSection === id
									? `${desktopLinkBaseClasses} ${desktopLinkActiveClasses}`
									: desktopLinkBaseClasses
							}
							onClick={(e) => {
								e.preventDefault();
								scrollToSection(id);
							}}
						>
							{label}
						</a>
					))}
				</div>
				<button
					className="inline-flex items-center gap-1.5 rounded-md border border-[color:var(--line)] bg-[color:var(--bg-2)] px-2 py-1 text-[11px] text-[color:var(--muted)] transition-colors duration-150 [font-family:var(--mono)] hover:border-[color:var(--line-2)] hover:text-[color:var(--fg)] max-[720px]:hidden"
					type="button"
					onClick={() => {
						onOpenCommandPalette();
						onCloseMobileNav();
					}}
					title="Command palette"
				>
					<span>⌘K</span>
				</button>
				<button
					className="ml-1 inline-flex h-[30px] w-[30px] items-center justify-center rounded-[7px] border border-[color:var(--line)] bg-[color:var(--bg-2)] text-[color:var(--fg-2)] transition-colors duration-150 hover:border-[color:var(--line-2)] hover:bg-[color:var(--hover)] [&_svg]:h-[14px] [&_svg]:w-[14px]"
					type="button"
					onClick={onToggleTheme}
					aria-label="Toggle theme"
					title="Toggle theme (⇧T)"
				>
					<ThemeIcon dark={isDark} />
				</button>
				<button
					className="hidden h-[30px] w-[30px] items-center justify-center gap-1 rounded-[7px] border border-[color:var(--line)] bg-[color:var(--bg-2)] text-[color:var(--fg-2)] transition-colors duration-150 hover:border-[color:var(--line-2)] hover:bg-[color:var(--hover)] max-[720px]:inline-flex"
					type="button"
					aria-label="Toggle navigation"
					aria-expanded={isMobileNavOpen}
					onClick={onToggleMobileNav}
				>
					<span
						className={
							isMobileNavOpen
								? "block h-px w-[13px] translate-y-[2.5px] rotate-45 bg-current transition-[transform,opacity] duration-150"
								: "block h-px w-[13px] bg-current transition-[transform,opacity] duration-150"
						}
					/>
					<span
						className={
							isMobileNavOpen
								? "block h-px w-[13px] -translate-y-[2.5px] -rotate-45 bg-current transition-[transform,opacity] duration-150"
								: "block h-px w-[13px] bg-current transition-[transform,opacity] duration-150"
						}
					/>
				</button>
			</nav>
			{isMobileNavOpen && (
				<div
					className="absolute right-0 bottom-[calc(100%+8px)] left-0 grid grid-cols-2 gap-1 rounded-[10px] border border-[color:color-mix(in_srgb,var(--line)_80%,transparent)] bg-[color:color-mix(in_srgb,var(--bg-2)_94%,var(--bg))] p-2 shadow-[0_14px_36px_-18px_rgba(0,0,0,.28)] min-[721px]:hidden"
				>
					{NAV_ITEMS.map(([id, label]) => (
						<a
							key={id}
							href={`#${id}`}
							className={
								activeSection === id
									? `${mobileLinkBaseClasses} ${mobileLinkActiveClasses}`
									: mobileLinkBaseClasses
							}
							onClick={(e) => {
								e.preventDefault();
								onCloseMobileNav();
								scrollToSection(id);
							}}
						>
							{label}
						</a>
					))}
				</div>
			)}
		</div>
	);
}
