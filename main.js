var fs = require('fs');
var Handlebars = require('handlebars');
var helpers = require('./helpers')
Handlebars.registerHelper('ifCond', helpers.ifCond_fn)


var source_name = "template.html";
var source, template, section_content, context, html, outfile_name;

source = fs.readFileSync(source_name, {encoding: 'utf8'});
template = Handlebars.compile(source);

s0_temp = fs.readFileSync("sections/product_specs.html", "utf8");
s0_temp = Handlebars.compile(s0_temp);
var product_context = JSON.parse(fs.readFileSync('products/CN0348.json', 'utf8'));
product_specs = s0_temp(product_context);


schematics = fs.readFileSync("sections/schematics.html", "utf8");
cross_sell = fs.readFileSync("sections/cross_sell_section.html", "utf8");
datasheet_and_warranty_policy = fs.readFileSync("sections/datasheet_and_warranty_policy.html", "utf8")
refund_and_return_policy = fs.readFileSync("sections/refund_and_return_policy.html", "utf8");
same_day_shipping_policy = fs.readFileSync("sections/same_day_shipping_policy.html", "utf8");
free_shipping_policy = fs.readFileSync("sections/free_shipping_policy.html", "utf8");
features = fs.readFileSync("sections/features.html", "utf8");
additional_shipping_policy = fs.readFileSync("sections/additional_shipping_policy.html", "utf8");
additional_payment_and_return_policy = fs.readFileSync("sections/additional_payment_and_return_policy.html", "utf8");
feedback_and_social_proof = fs.readFileSync("sections/feedback_and_social_proof.html", "utf8");
about_us = fs.readFileSync("sections/about_us.html", "utf8");
contact_us = fs.readFileSync("sections/contact_us.html", "utf8");


var generateVariants = true
if (generateVariants) {
	variants = product_context['quantityVariants']
	var index;
	for (index = 0; index < variants.length; index++) {
		console.log(variants[index])
	}
}


context = {
	section: [
		product_specs,
		schematics,
		cross_sell,
		datasheet_and_warranty_policy,
		refund_and_return_policy,
		same_day_shipping_policy,
		free_shipping_policy,
		features,
		additional_shipping_policy,
		additional_payment_and_return_policy,
		feedback_and_social_proof,
		about_us,
		contact_us
	]
};
html  = template(context);


outfile_name = 'index.html'
fs.writeFileSync(outfile_name, html, {encoding: 'utf8'})
