require 'rails_helper'

describe 'landing page' do
  it 'goes to landing page' do
    puts Time.now
  	visit '/'
    puts Time.now
  	expect(page).to have_content 'Enter'
  	puts 'hi'
  	click_on('Enter')
    puts find('#page').text
  	sleep 0
  	puts find('#main_itinerary')
    Capybara.ignore_hidden_elements = false

   
    puts find('.boxy3 .next_gator').visible?
  	sleep 0
  end
  it 'goes to landing page' do
  	visit '/'
  	expect(page).to have_content 'Enter'
  	click_on('Enter')
  	puts 'right here'
  	puts find('#travelogue_header').text
  	puts 'hi yo'
  	click_on("Start Safari")
    puts Time.now
  	puts page.find('#main_itinerary')
  	sleep 0
  end

end