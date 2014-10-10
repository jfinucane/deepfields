module TeacherHelper


  def lesson_plan_links
    {
      'Purpose' => 'purpose', 'Desired learning outcomes' => 'learning_outcomes', 'Prerequisites' => 'prerequisites', 'New vocabulary' => 'new_vocabulary',
      'General misconceptions' => 'general_misconceptions', 'Preparation time' => 'prep_time', 'Execution time' => 'exec_time', 'Physical layout of room' => 'room_layout',
      'Materials' => 'materials', 'Procedure / Directions' => 'procedure_directions', 'Evaluation / Assessment' => 'evaluation_assessment', 
      'Follow-up activities' => 'follow_up_activities_extensions', 'Interdisciplinary activities' => 'interdisciplinary_activities', 'One-computer classrooms' => 'one_computer',
      'Classrooms without computers' => 'no_computer', 'Home schoolers' => 'home_schoolers'
    }
  end

  def overview_links
    {
      'Description of the lesson' => 'description', "Overview of Teacher's Pages" => 'overview', 
      'Preparing for an Online Exploration' => 'preparing', 'Subjects' => 'subjects', ' Concepts' => 'concepts',
      'Prerequisites' => 'prerequisites', 'Process skills acquired' => 'skills_aquired', 
      'Grade levels / Target audience' => 'target', 'Preparation time' => 'preparation_time', 
      'Execution time' => 'execution_time', 'Last update' => 'last_update', 'Credits' => 'credits'
    }
  end

  def science_links
    {
      'What is the solar system?' => 'what_is_solar', 
      'How many planets are there in our solar system?' => 'how_many',
      'How did the solar system form?' => 'form',
      'How old is the solar system?' => 'old',
      'How big is the solar system' => 'big',
      'Are there differences among the planets in our solar system?' => 'differences', 
      'What is the asteroid belt?' => 'asteroid_belt',
      'Where do comets come from?' => 'comets',
      'Are there any planets that can be seen without a telescope?' => 'seen_without', 
      'What are the rocky, or terrestrial, planets?' => 'rocky',
      'What are the giant planets?' => 'giant',
      'Which planets have rings?' => 'rings', 
      'Can the Hubble Space Telescope take pictures of all the planets in our solar system?' => 'pictures_of_planets',
      'Can the Hubble Space Telescope take pictures of the Sun?' => 'pictures_of_sun',
      'Why is there a discussion over whether Pluto is or is not a planet?' => 'pluto',
      'What is a dwarf planet?' => 'what_is_dwarf',
      'Words from a scientist' => 'words_from',
      'References' => 'references'
    }
  end

  def computer_needs_links
    {
      'Web browser' => 'browser', 'Computers' => 'computers', 'Operating systems' => 'os', 
      'How to configure the browser' => 'configure_browser', 'Troubleshooting' => 'troubleshooting'
    }
  end

  def grab_bag_links
    {'Downloadable cards (PDF)' => 'cards',
     'PDF follow-up activities/ Extension worksheets' => 'worksheets',
     'Web resources from STScI' => 'stsci_resources',
     'Other websites and Web resources' => 'other_resources',
     'Books and other printed materials' => 'books'}
  end

  def pc_requirements
    {
      'CPU' => 'Any',
      'Main Memory' => 'Operating system basic requirements (typically 4GB)', 'Operating system' => 'Windows 7, 8 or later', 
      'Display' => 'Color required: Minimum 256 colors\nColor recommended: 16K colors or better\nResolution: Configured for 1024x768 or larger ',
      'Printer (optional)' => "For printouts of students' final card collections or the PDFs from Grab Bag or Lesson Plan", 
      'Disk space' => 'Enough space for installation of a browser '
    }
  end


  def mac_requirements
    {
      'CPU' => 'Any',
      'Main Memory' => 'Operating system basic requirements (typically 4GB)', 'Operating system' => 'Mac OS X, or later', 
      'Display' => 'Color required: Minimum 256 colors\nColor recommended: 16K colors or better\nResolution: Configured for 1024x768 or larger ',
      'Printer (optional)' => "For printouts of students' final card collections or the PDFs from Grab Bag or Lesson Plan", 
      'Disk space' => 'Enough space for installation of a browser '
    }
  end

  def is_active?(path)
    if url_for == path
      return 'active'
    end

    nil
  end

  def jump_to(links)
    render :partial => 'jump_to', :locals => {:links => links}
  end

  def top_link
    content_tag :div, :class => 'to-top' do
      link_to 'TOP', url_for(:anchor => :top)
    end
  end

  #define url helpers for each page
  %w(computer-needs lesson-plan education-standards science-background hal ipad grab-bag).each do |page|
    method = page.gsub(/-/, '_')
    eval <<-METHOD
      def #{method}_path(anchor=nil)
        unless anchor
          teacher_page_path('#{page}')
        else
          teacher_page_path('#{page}', :anchor => anchor)
        end
      end
    METHOD
  end

  def file_size file_name
    file_size = File.size(Rails.root.join("app/assets/media/" + file_name))
    '(' + number_to_human_size(file_size, :precision => 2) + ' PDF)'
  end
end
