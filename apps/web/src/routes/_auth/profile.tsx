import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@momkiddis/ui/components/button";
import { Input } from "@momkiddis/ui/components/input";
import { Label } from "@momkiddis/ui/components/label";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { ArrowLeftIcon, UserIcon, MailIcon, SaveIcon, LogOutIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/profile")({
	component: ProfilePage,
});

function ProfilePage() {
	const { session } = Route.useRouteContext();
	const navigate = useNavigate();
	const [name, setName] = useState(session?.user.name ?? "");
	const [isSaving, setIsSaving] = useState(false);
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	async function handleSave() {
		if (!name.trim() || name === session?.user.name) return;
		setIsSaving(true);
		try {
			await authClient.updateUser({ name: name.trim() });
			toast.success("Profil berhasil diperbarui");
		} catch {
			toast.error("Gagal memperbarui profil. Coba lagi.");
		} finally {
			setIsSaving(false);
		}
	}

	async function handleLogout() {
		setIsLoggingOut(true);
		await authClient.signOut();
		navigate({ to: "/" });
	}

	const initials = (session?.user.name ?? "U").slice(0, 2).toUpperCase();

	return (
		<div className="mx-auto max-w-lg px-4 py-10 sm:px-6">
			{/* Back link */}
			<Link
				to="/dashboard"
				className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
			>
				<ArrowLeftIcon className="size-3.5" />
				Kembali ke Dashboard
			</Link>

			<div className="mt-6">
				<h1 className="text-xl font-bold text-foreground">Profil Saya</h1>
				<p className="mt-1 text-sm text-muted-foreground">
					Kelola informasi akun Momkiddy Indonesia kamu.
				</p>
			</div>

			{/* Avatar */}
			<div className="mt-8 flex items-center gap-4">
				<div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
					{initials}
				</div>
				<div>
					<p className="text-base font-semibold text-foreground">{session?.user.name}</p>
					<p className="text-sm text-muted-foreground">{session?.user.email}</p>
				</div>
			</div>

			{/* Form */}
			<div className="mt-8 space-y-5 rounded-xl border border-border bg-card p-5">
				{/* Name field */}
				<div className="space-y-2">
					<Label htmlFor="name" className="flex items-center gap-1.5 text-sm">
						<UserIcon className="size-3.5 text-muted-foreground" />
						Nama Lengkap
					</Label>
					<Input
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						placeholder="Nama lengkap kamu"
						className="text-sm"
					/>
				</div>

				{/* Email — read only */}
				<div className="space-y-2">
					<Label className="flex items-center gap-1.5 text-sm text-muted-foreground">
						<MailIcon className="size-3.5" />
						Email
					</Label>
					<Input
						value={session?.user.email ?? ""}
						disabled
						className="text-sm bg-muted/40 text-muted-foreground cursor-not-allowed"
					/>
					<p className="text-xs text-muted-foreground">
						Email tidak dapat diubah.
					</p>
				</div>

				{/* Save */}
				<Button
					onClick={handleSave}
					disabled={isSaving || !name.trim() || name === session?.user.name}
					className="w-full gap-2"
					size="sm"
				>
					<SaveIcon className="size-3.5" />
					{isSaving ? "Menyimpan..." : "Simpan Perubahan"}
				</Button>
			</div>

			{/* Danger zone */}
			<div className="mt-6 rounded-xl border border-border p-5">
				<p className="text-sm font-semibold text-foreground">Keluar</p>
				<p className="mt-1 text-xs text-muted-foreground">
					Kamu akan keluar dari akun Momkiddy Indonesia.
				</p>
				<Button
					variant="outline"
					size="sm"
					className="mt-4 gap-2 text-destructive border-destructive/30 hover:bg-destructive/5"
					onClick={handleLogout}
					disabled={isLoggingOut}
				>
					<LogOutIcon className="size-3.5" />
					{isLoggingOut ? "Keluar..." : "Keluar dari Akun"}
				</Button>
			</div>
		</div>
	);
}
