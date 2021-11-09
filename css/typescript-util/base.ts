// Baseline Units: rem
export const htmlFontSize = 18;

export const baselinePX = 20;

export const base = (multiplier = 1): string => `${(baselinePX / htmlFontSize) * multiplier} rem`;
/*
Scss For This Typescript File
$htmlFontSize: 18;
$baselinePX: 20;


@function base($multiplier: 1) {
    @return (($baselinePX / $htmlFontSize) * $multiplier) + 'rem';
}
*/