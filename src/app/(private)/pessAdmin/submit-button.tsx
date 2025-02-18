"use client";

type Props = {
  status: boolean;
};

export function SubmitButton({ status }: Props) {
  return (
    <button
      type="submit"
      aria-disabled={status}
      className={`bg-[#21aeb8] text-white px-4 py-2 rounded ${status ? "opacity-50 cursor-not-allowed" : ""
        }`}
    >
      {status ? "Adicionando..." : "Adicionar admin"}
    </button>
  );
}