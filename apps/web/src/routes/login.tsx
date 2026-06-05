import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@momkiddis/ui/components/button";
import { Input } from "@momkiddis/ui/components/input";
import { Label } from "@momkiddis/ui/components/label";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import z from "zod";
import { authClient } from "@/lib/auth-client";
import { siteConfig } from "@/lib/site-config";
import { GraduationCapIcon, ArrowLeftIcon } from "lucide-react";

export const Route = createFileRoute("/login")({
	component: LoginPage,
});

type Mode = "signin" | "signup";

function LoginPage() {
	const [mode, setMode] = useState<Mode>("signin");

	return (
		<div className="flex min-h-svh flex-col items-center justify-center px-4 py-12">
			{/* Back to home */}
			<Link
				to="/"
				className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
			>
				<ArrowLeftIcon className="size-3.5" />
				Kembali ke Beranda
			</Link>

			{/* Card */}
			<div className="w-full max-w-sm">
				{/* Logo + brand */}
				<div className="mb-8 text-center">
					<div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary/10">
						<GraduationCapIcon className="size-7 text-primary" />
					</div>
					<h1 className="mt-3 text-xl font-bold text-foreground">
						{siteConfig.name}
					</h1>
					<p className="mt-1 text-sm text-muted-foreground">
						{mode === "signin"
							? "Masuk ke akun kamu"
							: "Buat akun baru"}
					</p>
				</div>

				{/* Tab switcher */}
				<div className="mb-6 flex rounded-xl border border-border bg-muted/40 p-1">
					<button
						type="button"
						onClick={() => setMode("signin")}
						className={[
							"flex-1 rounded-lg py-1.5 text-sm font-medium transition-colors",
							mode === "signin"
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						].join(" ")}
					>
						Masuk
					</button>
					<button
						type="button"
						onClick={() => setMode("signup")}
						className={[
							"flex-1 rounded-lg py-1.5 text-sm font-medium transition-colors",
							mode === "signup"
								? "bg-background text-foreground shadow-sm"
								: "text-muted-foreground hover:text-foreground",
						].join(" ")}
					>
						Daftar
					</button>
				</div>

				{mode === "signin" ? (
					<SignInForm onSwitch={() => setMode("signup")} />
				) : (
					<SignUpForm onSwitch={() => setMode("signin")} />
				)}
			</div>
		</div>
	);
}

function SignInForm({ onSwitch }: { onSwitch: () => void }) {
	const navigate = useNavigate();

	const form = useForm({
		defaultValues: { email: "", password: "" },
		onSubmit: async ({ value }) => {
			await authClient.signIn.email(
				{ email: value.email, password: value.password },
				{
					onSuccess: () => {
						navigate({ to: "/dashboard" });
						toast.success("Berhasil masuk!");
					},
					onError: (error) => {
						toast.error(error.error.message || "Gagal masuk. Periksa email & password kamu.");
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				email: z.email("Email tidak valid"),
				password: z.string().min(8, "Password minimal 8 karakter"),
			}),
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="space-y-4"
		>
			<form.Field name="email">
				{(field) => (
					<div className="space-y-1.5">
						<Label htmlFor="signin-email" className="text-sm">Email</Label>
						<Input
							id="signin-email"
							type="email"
							placeholder="bunda@email.com"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className="text-sm"
						/>
						{field.state.meta.errors[0] && (
							<p className="text-xs text-destructive">{field.state.meta.errors[0]?.message}</p>
						)}
					</div>
				)}
			</form.Field>

			<form.Field name="password">
				{(field) => (
					<div className="space-y-1.5">
						<Label htmlFor="signin-pw" className="text-sm">Password</Label>
						<Input
							id="signin-pw"
							type="password"
							placeholder="••••••••"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className="text-sm"
						/>
						{field.state.meta.errors[0] && (
							<p className="text-xs text-destructive">{field.state.meta.errors[0]?.message}</p>
						)}
					</div>
				)}
			</form.Field>

			<form.Subscribe selector={(s) => ({ canSubmit: s.canSubmit, isSubmitting: s.isSubmitting })}>
				{({ canSubmit, isSubmitting }) => (
					<Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting}>
						{isSubmitting ? "Masuk..." : "Masuk"}
					</Button>
				)}
			</form.Subscribe>

			<p className="text-center text-xs text-muted-foreground">
				Belum punya akun?{" "}
				<button type="button" onClick={onSwitch} className="font-medium text-primary hover:underline">
					Daftar sekarang
				</button>
			</p>
		</form>
	);
}

function SignUpForm({ onSwitch }: { onSwitch: () => void }) {
	const navigate = useNavigate();

	const form = useForm({
		defaultValues: { name: "", email: "", password: "" },
		onSubmit: async ({ value }) => {
			await authClient.signUp.email(
				{ name: value.name, email: value.email, password: value.password },
				{
					onSuccess: () => {
						navigate({ to: "/dashboard" });
						toast.success("Akun berhasil dibuat! Selamat datang 🎉");
					},
					onError: (error) => {
						toast.error(error.error.message || "Gagal membuat akun. Coba lagi.");
					},
				},
			);
		},
		validators: {
			onSubmit: z.object({
				name: z.string().min(2, "Nama minimal 2 karakter"),
				email: z.email("Email tidak valid"),
				password: z.string().min(8, "Password minimal 8 karakter"),
			}),
		},
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				form.handleSubmit();
			}}
			className="space-y-4"
		>
			<form.Field name="name">
				{(field) => (
					<div className="space-y-1.5">
						<Label htmlFor="signup-name" className="text-sm">Nama Lengkap</Label>
						<Input
							id="signup-name"
							placeholder="Nama kamu"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className="text-sm"
						/>
						{field.state.meta.errors[0] && (
							<p className="text-xs text-destructive">{field.state.meta.errors[0]?.message}</p>
						)}
					</div>
				)}
			</form.Field>

			<form.Field name="email">
				{(field) => (
					<div className="space-y-1.5">
						<Label htmlFor="signup-email" className="text-sm">Email</Label>
						<Input
							id="signup-email"
							type="email"
							placeholder="bunda@email.com"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className="text-sm"
						/>
						{field.state.meta.errors[0] && (
							<p className="text-xs text-destructive">{field.state.meta.errors[0]?.message}</p>
						)}
					</div>
				)}
			</form.Field>

			<form.Field name="password">
				{(field) => (
					<div className="space-y-1.5">
						<Label htmlFor="signup-pw" className="text-sm">Password</Label>
						<Input
							id="signup-pw"
							type="password"
							placeholder="Minimal 8 karakter"
							value={field.state.value}
							onBlur={field.handleBlur}
							onChange={(e) => field.handleChange(e.target.value)}
							className="text-sm"
						/>
						{field.state.meta.errors[0] && (
							<p className="text-xs text-destructive">{field.state.meta.errors[0]?.message}</p>
						)}
					</div>
				)}
			</form.Field>

			<form.Subscribe selector={(s) => ({ canSubmit: s.canSubmit, isSubmitting: s.isSubmitting })}>
				{({ canSubmit, isSubmitting }) => (
					<Button type="submit" className="w-full" disabled={!canSubmit || isSubmitting}>
						{isSubmitting ? "Membuat akun..." : "Buat Akun"}
					</Button>
				)}
			</form.Subscribe>

			<p className="text-center text-xs text-muted-foreground">
				Sudah punya akun?{" "}
				<button type="button" onClick={onSwitch} className="font-medium text-primary hover:underline">
					Masuk di sini
				</button>
			</p>
		</form>
	);
}
