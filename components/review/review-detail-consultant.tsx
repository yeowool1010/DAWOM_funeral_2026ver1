import type { ReviewItem } from "@/lib/reviews";
import { User } from "lucide-react";

interface ReviewDetailConsultantProps {
  consultant: NonNullable<ReviewItem["consultant"]>;
}

export function ReviewDetailConsultant({ consultant }: ReviewDetailConsultantProps) {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-stone-50/50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-stone-200 text-stone-600">
              <User className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-stone-900">
                {consultant.name}
              </h2>
              <p className="mt-2 text-stone-600">{consultant.quote}</p>
              <p className="mt-4 font-medium text-stone-800">
                {consultant.venue}
              </p>
              <p className="mt-1 text-sm text-stone-600">
                {consultant.address} | {consultant.avgCost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
